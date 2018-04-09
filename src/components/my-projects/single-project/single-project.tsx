import { Component, Prop } from "@stencil/core";
//import { BackButton } from "@ionic/core";

@Component({
  tag: "single-project",
  styleUrl: "single-project.scss"
})
export class SingleProject {
  @Prop() project;

  render() {
    if (this.project) {
      let tags = [];
      this.project.tags.forEach(tag => {
        //let props = {tag};

        tags.push(<tech-chip tag={tag[0]} link={tag[1]}/>);
      });
      
      return (
        <div class="card">
          <lazy-img class="cardBackground" src={this.project.background} alt={this.project.alt} />
          <div class="title">
            <div class="titleText">{this.project.title}</div>
            <div class="emptySpace"> </div>
           </div>
          <div class="description">
            {this.project.description}
          </div>
          <div class="tagList">{tags}</div>
        </div>
      );
    }
  }
}

import { Component } from "@stencil/core";

@Component({
    tag: "feature-scoreboard-component",
    styleUrl: "scoreboards.scss"
  })
  export class ScoreboardsComponent {
  
    constructor() {
      document.title = `scoreboardComponent`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Scoreboard Features</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
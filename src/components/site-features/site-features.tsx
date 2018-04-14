import { Component } from "@stencil/core";

@Component({
  tag: "site-features",
  styleUrl: "site-features.scss"
})
export class siteFeatures {

  constructor() {
    document.title = `Features`;
  } 

  render() {
    return (
      <div class="tcDivClass">
        <p>Yababu Features</p>
        <img src="/assets/img/UnderConstruction.png" />
      </div>
    );
  }
}

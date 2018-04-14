import { Component } from "@stencil/core";

@Component({
  tag: "site-mobile",
  styleUrl: "site-mobile.scss"
})
export class siteMobile {

  constructor() {
    document.title = `Mobile`;
  } 

  render() {
    return (
      <div class="tcDivClass">
        <p>Yababu Mobile</p>
        <img src="/assets/img/UnderConstruction.png" />
      </div>
    );
  }
}

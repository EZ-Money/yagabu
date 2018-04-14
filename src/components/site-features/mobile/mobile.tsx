import { Component } from "@stencil/core";

@Component({
    tag: "feature-mobile-component",
    styleUrl: "mobile.scss"
  })
  export class MobileComponent {
  
    constructor() {
      document.title = `Mobile`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Mobile Features</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
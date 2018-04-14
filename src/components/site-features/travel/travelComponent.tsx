import { Component } from "@stencil/core";

@Component({
    tag: "feature-travel-component",
    styleUrl: "travelComponent.scss"
  })
  export class TravelComponent {
  
    constructor() {
      document.title = `testComponent`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Travel Features</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
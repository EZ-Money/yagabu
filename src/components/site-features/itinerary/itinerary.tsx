import { Component } from "@stencil/core";

@Component({
    tag: "feature-itinerary-component",
    styleUrl: "itinerary.scss"
  })
  export class ItineraryComponent {
  
    constructor() {
      document.title = `testComponent`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Tournament Itinerary</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
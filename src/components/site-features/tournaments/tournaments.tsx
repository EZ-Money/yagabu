import { Component } from "@stencil/core";

@Component({
    tag: "feature-tournaments-component",
    styleUrl: "tournaments.scss"
  })
  export class Tournaments {
  
    constructor() {
      document.title = `Tournaments`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Tournament Features</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
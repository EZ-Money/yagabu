import { Component } from "@stencil/core";

@Component({
    tag: "feature-games-component",
    styleUrl: "games.scss"
  })
  export class Games {
  
    constructor() {
      document.title = `Games`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Supported Golf Games</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
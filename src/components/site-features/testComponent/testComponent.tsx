import { Component } from "@stencil/core";

@Component({
    tag: "test-component",
    styleUrl: "testComponent.scss"
  })
  export class TestComponent {
  
    constructor() {
      document.title = `testComponent`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Test Page</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
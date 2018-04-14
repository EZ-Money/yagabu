import { Component } from "@stencil/core";

@Component({
    tag: "feature-messaging-component",
    styleUrl: "messaging.scss"
  })
  export class MessagingComponent {
  
    constructor() {
      document.title = `Messaging`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Messaging Features</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
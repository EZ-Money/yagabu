import { Component } from "@stencil/core";

@Component({
    tag: "feature-notifications-component",
    styleUrl: "notifications.scss"
  })
  export class NotificationsComponent {
  
    constructor() {
      document.title = `Notifications`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Notifications Features</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
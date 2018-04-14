import { Component } from "@stencil/core";

@Component({
    tag: "feature-date-poll-component",
    styleUrl: "datePoll.scss"
  })
  export class DatePoll {
  
    constructor() {
      document.title = `Date Poll`;
    } 
  
    render() {
      return (
        <div class="tcDivClass">
        
          <p>Date Poll</p>
          <img src="/assets/img/UnderConstruction.png" />
        
        </div>
      );
    }
  }
  
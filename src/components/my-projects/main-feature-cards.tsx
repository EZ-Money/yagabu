import { Component, State } from "@stencil/core";

@Component({
  tag: "main-feature-cards",
  styleUrl: "main-feature-cards.scss"
})
export class MyProjects {
  @State()
  projects: any = [
    {
      title: "Who, When, Where",
      description:
        "Dates, invites, travel, round information, scoring, betting...  Just a few things Yagabu will help you with.",
      tags: [ ["Date Poll", "/features/datePoll"], 
              ["Itinerary", "/features/itinerary"], 
              ["Travel","/features/travel"] ],
      more: "https://yagabu.com",
      background: "/assets/img/TeeOff300x200.png",
      alt: "carts"
    },
    {
      title: "Manage Games",
      description:
        "Club tournaments, weekly games, year long point races.  We can help manage it all, and provide an online scoreboard for your group to enjoy.",
      tags: [ ["Tournaments", "/features/tournaments"], 
              ["Games", "/features/games" ], 
              ["Scoreboards", "/features/scoreboards"] ],
      more: "https://yagabu.com", 
      background: "/assets/img/ScoreCardAndBall300x200.png", 
      alt: "carts"
    },
    {
      title: "Have More Fun",
      description: "Yagabu provides real-time updates before, during, and after your game. Everyone can share their antics as they happen.",
      tags: [ ["Mobile", "/features/mobile"], 
              ["Notifications", "/features/notifications"], 
              ["Messaging","/features/messaging"] ],
      more: "https://yagabu.com",
      background: "/assets/img/BetsAndBooze300x200.png",
      alt: "carts"
    }
  ];

  render() {
    let items = [];
    this.projects.forEach(project => {
      items.push(<single-project project={project} />);
    });
    return <div class="main-feature-cards-container">{items}</div>;
  }
}

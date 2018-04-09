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
      tags: [ ["Date Poll", "/datePoll.html"], ["Itinerary", "/itinerary.html"], ["Travel","/travel.html"] ],
      more: "https://github.com/Fdom92/Pantrify",
      background: "/assets/img/FourCarts300x200.png",
      alt: "carts"
    },
    {
      title: "Manage Games",
      description:
        "Club tournaments, weekly games, year long point races.  We can help manage it all, and provide an online scoreboard for your group to enjoy.",
      tags: [ ["Tournaments", "/tournaments.html"], ["Games", "/games.html" ], ["Scoreboards", "/scorboards.html"] ],
      more: "https://github.com/Fdom92/personal-web-site", 
      background: "/assets/img/ScoreCardAndBall300x200.png", 
      alt: "carts"
    },
    {
      title: "Have More Fun",
      description: "Yagabu provides real-time updates before, during, and after your game. Everyone can share their antics as they happen.",
      tags: [ ["Mobile", "/mobile.html"], ["Notifications", "/notifications.html"], ["Messaging","/messaging"] ],
      more: "https://github.com/Fdom92/anidb",
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

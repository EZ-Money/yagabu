import { Component, State } from "@stencil/core";

@Component({
  tag: "main-feature-cards",
  styleUrl: "main-feature-cards.scss"
})
export class MyProjects {
  @State()
  projects: any = [
    {
      title: "Who, When, Where, How",
      description:
        "A new simple way to organize your pantry from your mobile device.",
      tags: ["Angular", "Ionic", "Firebase"],
      more: "https://github.com/Fdom92/Pantrify",
      background: "/assets/img/FourCarts300x200.png",
      alt: "carts"
    },
    {
      title: "Manage Games",
      description:
        "My personal web site was also made using just Stencil, it is also a PWA.",
      tags: ["Stenciljs", "PWA"],
      more: "https://github.com/Fdom92/personal-web-site", 
      background: "/assets/img/ScoreCardAndBall300x200.png",
      alt: "carts"
    },
    {
      title: "Have More Fun",
      description: "A PWA to search information about your favorites animes",
      tags: ["Stenciljs", "PWA"],
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

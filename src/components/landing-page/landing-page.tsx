import { Component, Element } from '@stencil/core';


@Component({
  tag: 'landing-page',
  styleUrl: 'landing-page.scss'
})
export class LandingPage {

  @Element() el: Element;

  constructor() {
    document.title = `Yagabu`;
  }

  componentDidLoad() {
    // unfortunately necessary hack because Edge
    // dont show the animated youtube video in Edge because
    // pointer-events: none; is broken in Edge
    // just link to the youtube video directly like we do on mobile
    if ((document as any).documentMode || /Edge/.test(navigator.userAgent)) {
      (this.el.querySelector('#youtube-video') as HTMLElement).style.display = 'none';
      (this.el.querySelector('#launch-video') as HTMLElement).style.display = 'none';
      (this.el.querySelector('#background') as HTMLElement).style.display = 'none';
      (this.el.querySelector('#mobile-video') as HTMLElement).style.display = 'flex';
    }
  }

  openYoutube() {
    const youtube = (this.el.querySelector('#youtube-video') as HTMLElement);
    const background = (this.el.querySelector('#background') as HTMLElement);

    youtube.classList.add('youtube-show');
    background.classList.add('background-show');
  }

  closeBackground() {
    const youtube = (this.el.querySelector('#youtube-video') as HTMLElement);
    const background = (this.el.querySelector('#background') as HTMLElement);

    youtube.classList.remove('youtube-show');
    background.classList.remove('background-show');
  }

  render() {
    return (
      
      <div>

        <main id="main-div">
        
          <span id="titleSpan">Golf: Organized</span>
          <span id="action-two">Tools For Your Tournament</span>
          
          <section id="buttons">
            <stencil-route-link url="/docs/intro">
              <button id="learn-more">
                Learn More
              </button>
            </stencil-route-link>
          </section>

        </main>

      <h1 class="section-title">Portfolio</h1>,
      <my-projects></my-projects>

        <h1 class="section-title">Example Timeline</h1>
        <my-experience></my-experience>

        <h1 class="section-title">Hobbies</h1>
        <my-hobbies></my-hobbies> 

        <section id="buttons">

          <stencil-route-link url="/docs/getting-started">
            <button id="get-started">
              Get Started
          </button>
          </stencil-route-link>

          <stencil-route-link url="/docs/intro">
            <button id="learn-more">
              Learn More
          </button>
          </stencil-route-link>

          <div onClick={() => { this.openYoutube() }} id="launch-video">
            <img src="/assets/img/video-icon.png" alt="Icon for Video"></img><span>Watch launch video</span>
          </div>

          <a href="https://youtu.be/UfD-k7aHkQE" rel="noopener" id="mobile-video">
            <img src="/assets/img/video-icon.png" alt="Icon for video link"></img><span>Watch launch video</span>
          </a>
        </section>
        
      </div>
    );
  }
}

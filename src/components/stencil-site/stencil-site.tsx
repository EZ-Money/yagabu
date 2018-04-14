import "@ionic/core";

import "@stencil/router";
import { Component } from "@stencil/core";

@Component({
  tag: "stencil-site",
  styleUrl: "stencil-site.scss"
})
export class App {
  render() {
    return [
      <div id="main-div">
        <site-header />

        <div class="app">
          <stencil-router>
            
            <stencil-route url="/" component="landing-page" exact={true} />
            <stencil-route url="/mobile" component="site-mobile" exact={true} />
            <stencil-route url="/features" component="site-features" exact={true} />
            <stencil-route url="/features/testComponent" component="test-component" exact={true} />
            <stencil-route url="/features/datePoll" component="feature-date-poll-component" exact={true} />
            <stencil-route url="/features/games" component="feature-games-component" exact={true} />
            <stencil-route url="/features/itinerary" component="feature-itinerary-component" exact={true} />
            <stencil-route url="/features/notifications" component="feature-Notifications" exact={true} />
            <stencil-route url="/features/scoreboards" component="feature-Scoreboards" exact={true} />
            <stencil-route url="/features/tournaments" component="feature-tournaments-component" exact={true} />
            <stencil-route url="/features/travel" component="feature-travel-component" exact={true} />

            {/*Has a left menu*/}
            <stencil-route
              url={["/docs", "/demos", "/resources", "/pwa"]}
              routeRender={() => {
                return (
                  <div class="wrapper">
                    <div class="pull-left">
                      <site-menu />
                    </div>
                    <div class="pull-right">
                      <stencil-route url="/demos" component="demos-page" />
                      <stencil-route
                        url="/docs/:pageName"
                        routeRender={(props: { [key: string]: any }) => {
                          const map = {
                            intro: "intro/index.html"
                          };
                          return (
                            <document-component
                              pages={[map[props.match.params.pageName]]}
                            />
                          );
                        }}
                      />
                      <stencil-route
                        url="/resources"
                        component="resources-page"
                      />
                      <stencil-route url="/pwa" component="pwas-page" />
                    </div>
                  </div>
                );
              }}
            />
          </stencil-router>

          {/*Footer*/}
          <div class="footerSpacer" />
          <site-footer />
          <div class="footerSpacerBottom" />
        </div>
      </div>
    ];
  }
}

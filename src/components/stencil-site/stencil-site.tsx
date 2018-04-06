import "@ionic/core";

import '@stencil/router';
import { Component } from '@stencil/core';

@Component({
  tag: 'stencil-site',
  styleUrl: 'stencil-site.scss'
})
export class App {
  render() {
    return [
      <div id="main-div">

        <site-header />
      
        <div class="app">
      
          <stencil-router>

            <stencil-route url="/" component="landing-page" exact={true} />

            <stencil-route
              url={[
                "/docs",
                "/demos",
                "/resources",
                "/pwa"
              ]}
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
                            'intro': 'intro/index.html',
                            'browser-support': 'intro/browsers.html',
                            'getting-started': 'start/index.html',
                            'my-first-component': 'basics/my-first-component.html',
                            'templating': 'basics/templating.html',
                            'decorators': 'basics/decorators.html',
                            'events': 'basics/events.html',
                            'component-lifecycle': 'basics/component-lifecycle.html',
                            'stencil-config': 'basics/stencil-config.html',
                            'forms': 'basics/forms.html',
                            'handling-arrays': 'basics/handling-arrays.html',
                            'testing': 'basics/testing.html',
                            'config': 'advanced/compiler/index.html',
                            'server-side-rendering': 'advanced/ssr/index.html',
                            'routing': 'addons/stencil-router.html',
                            'sass': 'addons/stencil-sass.html',
                            'service-workers': 'advanced/service-worker/index.html',
                            'distribution': 'advanced/distribution/index.html',
                            'framework-integration': 'advanced/framework-integration/index.html',
                            'prerendering': 'advanced/pre-rendering/index.html',
                            'shadow-dom': 'advanced/shadow-dom/index.html',
                            'css-variables': 'advanced/css-variables/index.html',
                            'context': 'advanced/context/index.html'
                          };
                          return (
                            <document-component
                              pages={[map[props.match.params.pageName]]}
                            />
                          );
                        }}
                      />
                      <stencil-route url="/resources" component="resources-page" />
                      <stencil-route url="/pwa" component="pwas-page" />
                    </div>
                  </div>
                );
              }}
            />

          </stencil-router>
          
        </div>
      </div>,

      <site-footer/>
     ];
  }
}

import { Component } from '@stencil/core';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  // yagabuLogoWhite48x48 yagabuLogoWhite48x140
  render() {
    return (
      <div class="site-header">
        
        <stencil-route-link url="/" class="logo-link">
          <div class="logo"></div>
        </stencil-route-link>

        <div class="spacer"/>

        <stencil-route-link class="noWrapLink" url="/features" exact={true}>
          Features
        </stencil-route-link>

        <stencil-route-link class="noWrapLink" url="/mobile"  exact={true}>
          Mobile
        </stencil-route-link>

        <stencil-route-link class="noWrapLink" url="/pwa" exact={true}>
          Sign-In
        </stencil-route-link>

      </div>
    );
  }
}

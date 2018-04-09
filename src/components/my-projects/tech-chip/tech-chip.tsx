import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'tech-chip',
    styleUrl: 'tech-chip.scss'
})
export class TechChip {

  @Prop() tag;
  @Prop() link;

  render() {
    return (
      <stencil-route-link class="routeLink" url={this.link}>
        <div class="tagText">{this.tag}</div>
      </stencil-route-link>
    );
  }
}

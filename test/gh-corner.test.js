import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../gh-corner.js';

describe('GhCorner', () => {
  it('has a default title "View source on GitHub", user "", repo "", and position "right"', async () => {
    const el = await fixture(html`<gh-corner></gh-corner>`);

    expect(el.title).to.equal('View source on GitHub');
    expect(el.user).to.equal('');
    expect(el.repo).to.equal('');
    expect(el.position).to.equal('right');
  });

  it('can override the title via attribute', async () => {
    const el = await fixture(
      html`<gh-corner title="attribute title"></gh-corner>`
    );

    expect(el.title).to.equal('attribute title');
  });

  it('can override the user via attribute', async () => {
    const el = await fixture(html`<gh-corner user="USER"></gh-corner>`);

    expect(el.user).to.equal('USER');
  });

  it('can override the repo via attribute', async () => {
    const el = await fixture(html`<gh-corner repo="REPO"></gh-corner>`);

    expect(el.repo).to.equal('REPO');
  });

  it('can override the position via attribute', async () => {
    const el = await fixture(html`<gh-corner position="left"></gh-corner>`);

    expect(el.position).to.equal('left');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture(html`<gh-corner></gh-corner>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});

import { LitElement, html, css } from "lit";
import './components/ navbar-component';
import './components/main-component'


class PageMain extends LitElement {
  static properties = {};

  static styles = css`
  `;

  constructor() {
    super();
  }

  render() {
    return html`
    <navbar-component></navbar-component>
    <main-component></main-component>
    `;
  }
}

customElements.define("page-main", PageMain);

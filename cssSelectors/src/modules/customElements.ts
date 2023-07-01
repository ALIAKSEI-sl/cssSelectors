export default class CustomElements {
  static create() {
    customElements.define('my-plate', class extends HTMLDivElement {}, {
      extends: 'div',
    });
    customElements.define('my-bento', class extends HTMLDivElement {}, {
      extends: 'div',
    });
    customElements.define('my-apple', class extends HTMLDivElement {}, {
      extends: 'div',
    });
    customElements.define('my-orange', class extends HTMLDivElement {}, {
      extends: 'div',
    });
    customElements.define('my-pickle', class extends HTMLDivElement {}, {
      extends: 'div',
    });
  }
}

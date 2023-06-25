export default function createCustomElements() {
  class Plate extends HTMLDivElement {}
  class Bento extends HTMLDivElement {}
  class Apple extends HTMLDivElement {}
  class Orange extends HTMLDivElement {}
  class Pickle extends HTMLDivElement {}

  customElements.define('my-plate', Plate, { extends: 'div' });
  customElements.define('my-bento', Bento, { extends: 'div' });
  customElements.define('my-apple', Apple, { extends: 'div' });
  customElements.define('my-orange', Orange, { extends: 'div' });
  customElements.define('my-pickle', Pickle, { extends: 'div' });
}

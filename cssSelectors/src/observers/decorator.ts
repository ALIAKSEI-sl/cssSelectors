import helper from '../modules/helper';

class Decorator {
  tableBody: HTMLDivElement;

  popup: HTMLDivElement;

  constructor() {
    this.tableBody = helper.getElement('.table-body') as HTMLDivElement;
    this.popup = helper.getElement('.popup-wrapper') as HTMLDivElement;
  }

  highlightElements() {
    const codeElems = helper.getAllElement('.markup *') as HTMLElement[];
    const tableElems = helper.getAllElement('.tablecloth *') as HTMLElement[];

    codeElems.forEach((el, i) => {
      el.addEventListener('mouseover', (e) => {
        e.stopPropagation();
        tableElems[i].classList.add('outlined');
        codeElems[i].classList.add('outlined');
        this.addTitle(tableElems[i]);
      });
      el.addEventListener('mouseout', (e) => {
        e.stopPropagation();
        tableElems[i].classList.remove('outlined');
        codeElems[i].classList.remove('outlined');
        this.removeTitle();
      });
    });

    tableElems.forEach((el, i) => {
      el.addEventListener('mouseover', (e) => {
        e.stopPropagation();
        codeElems[i].classList.add('outlined');
        tableElems[i].classList.add('outlined');
        this.addTitle(tableElems[i]);
      });
      el.addEventListener('mouseout', (e) => {
        e.stopPropagation();
        codeElems[i].classList.remove('outlined');
        tableElems[i].classList.remove('outlined');
        this.removeTitle();
      });
    });
  }

  addTitle(element: HTMLElement) {
    const positionTable = this.tableBody.getBoundingClientRect().left;
    const positionElem = element.getBoundingClientRect().left;

    const cloneElement = element.cloneNode() as Element;
    cloneElement.classList.remove('outlined');
    cloneElement.classList.remove('shake');
    if (!cloneElement.classList.length) {
      cloneElement.removeAttribute('class');
    }

    const div = helper.createElement(
      'div',
      'element-title',
      cloneElement.outerHTML
    ) as HTMLDivElement;

    div.style.left = `${positionElem - positionTable}px`;
    this.tableBody.appendChild(div);
  }

  removeTitle() {
    const elem = this.tableBody.querySelector('.element-title');
    elem?.remove();
  }

  showPopUp() {
    this.popup.classList.add('active');
  }

  hidePopUp() {
    this.popup.classList.remove('active');
  }
}

export default new Decorator();

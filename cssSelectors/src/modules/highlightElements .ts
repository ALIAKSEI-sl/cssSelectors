const tableBody = document.querySelector<HTMLElement>('.table-body');

function addTitle(element: HTMLElement) {
  const rect1 = tableBody?.getBoundingClientRect() as DOMRect;
  const rect2 = element.getBoundingClientRect();
  const div = document.createElement('div');
  div.classList.add('experement');
  const clonedElement = element.cloneNode(true) as Element;
  clonedElement.classList.remove('outlined');
  clonedElement.classList.remove('shake');

  if (clonedElement.classList.length === 0) {
    clonedElement.removeAttribute('class');
  }
  div.textContent = clonedElement.outerHTML;
  div.style.left = `${rect2.left - rect1.left}px`;
  tableBody?.appendChild(div);
}

function removeTitle() {
  const elem = tableBody?.querySelector('.experement');
  elem?.remove();
}

export default function highlightElements() {
  const codeElems = document.querySelectorAll<HTMLElement>('.markup *');
  const tableElems = document.querySelectorAll<HTMLElement>('.tablecloth *');

  codeElems.forEach((el, i) => {
    el.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      tableElems[i].classList.add('outlined');
      codeElems[i].classList.add('outlined');
    });
    el.addEventListener('mouseout', (e) => {
      e.stopPropagation();
      tableElems[i].classList.remove('outlined');
      codeElems[i].classList.remove('outlined');
    });
  });

  tableElems.forEach((el, i) => {
    el.addEventListener('mouseover', (e) => {
      e.stopPropagation();
      codeElems[i].classList.add('outlined');
      tableElems[i].classList.add('outlined');
      addTitle(tableElems[i]);
    });
    el.addEventListener('mouseout', (e) => {
      e.stopPropagation();
      codeElems[i].classList.remove('outlined');
      tableElems[i].classList.remove('outlined');
      removeTitle();
    });
  });
}

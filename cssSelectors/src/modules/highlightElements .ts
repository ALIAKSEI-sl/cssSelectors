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
    });
    el.addEventListener('mouseout', (e) => {
      e.stopPropagation();
      codeElems[i].classList.remove('outlined');
      tableElems[i].classList.remove('outlined');
    });
  });
}

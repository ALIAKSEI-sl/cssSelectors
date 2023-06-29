import { IParams } from '../models/params.model';
import { getAllElementOnTable, getElement } from './helpers';
import installLevel from './installLevel';

const ide = getElement('.ide-container');
const tableCloth = getElement('.tablecloth');
const burger = getElement('.burger-menu');

export default function inputHandler(input: HTMLInputElement, params: IParams) {
  const value = input.value.trim();
  const number = Number(value);
  if (number && Number.isInteger(number) && number > 0 && number < 13) {
    params.level = number;
    installLevel(params);
  } else {
    try {
      const elements = getAllElementOnTable(value, tableCloth);
      if (value === params.answer) {
        elements.forEach((elem) => elem.classList.add('disappear'));
        elements[elements.length - 1].addEventListener('animationend', () => {
          params.completion[params.level] = true;
          if (params.level === 12) {
            params.level = 1;
            installLevel(params);
          } else {
            params.level++;
            installLevel(params);
          }
        });
        const levelItem = Array.from(
          burger?.querySelectorAll('.level-item') as NodeListOf<Element>
        );
        Array.from(levelItem[params.level - 1].children).forEach((elem) => {
          if (elem.classList.contains('tick')) elem.classList.add('completed');
          else if (elem.classList.contains('use-hint')) {
            elem.textContent = 'a hint was used';
          }
        });
        // ticks[params.level - 1].classList.add('completed');
      } else if (elements.length) {
        elements.forEach((elem) => elem.classList.add('oscillation'));
        elements[elements.length - 1].addEventListener('animationend', () => {
          elements.forEach((elem) => elem.classList.remove('oscillation'));
        });
      } else {
        ide?.classList.add('oscillation');
        ide?.addEventListener('animationend', () => {
          ide?.classList.remove('oscillation');
        });
      }
    } catch {
      ide?.classList.add('oscillation');
      ide?.addEventListener('animationend', () => {
        ide?.classList.remove('oscillation');
      });
    }
  }
  input.value = '';
}

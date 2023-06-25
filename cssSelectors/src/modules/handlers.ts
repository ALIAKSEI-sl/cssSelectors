import { IParams } from '../models/params.model';
import { getAllElementOnTable, getElement } from './helpers';
import installLevel from './installLevel';

const ide = getElement('.ide-container');
const tableCloth = getElement('.tablecloth');

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
          params.level++;
          installLevel(params);
        });
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

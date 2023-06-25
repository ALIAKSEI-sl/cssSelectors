import './elements.scss';
import { IParams } from './models/params.model';
import createCustomElements from './modules/customElements';
import inputHandler from './modules/handlers';
import { getElement } from './modules/helpers';
import installLevel from './modules/installLevel';
import './style.scss';

const input = getElement('.input-selector') as HTMLInputElement;
const enterBtn = getElement('.button-enter');
const previous = getElement('.previous-level');
const next = getElement('.next-level');

const params: IParams = {
  level: 1,
  answer: '',
};

createCustomElements();
installLevel(params);

previous?.addEventListener('click', () => {
  if (params.level > 1) params.level--;
  installLevel(params);
});

next?.addEventListener('click', () => {
  if (params.level < 12) params.level++;
  installLevel(params);
});

enterBtn?.addEventListener('click', () => inputHandler(input, params));
input?.addEventListener('keydown', (event: KeyboardEvent) => {
  if (event.key === 'Enter') inputHandler(input, params);
});

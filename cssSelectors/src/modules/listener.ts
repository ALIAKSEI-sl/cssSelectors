import { IParams } from '../models/params.model';
import inputHandler from './handlers';
import { getElement } from './helpers';
import installLevel from './installLevel';

const input = getElement('.input-selector') as HTMLInputElement;
const enterBtn = getElement('.button-enter');
const previous = getElement('.previous-level');
const next = getElement('.next-level');
const menuBtn = getElement('.level-menu-wrapper');
const burger = getElement('.burger-menu');
const help = getElement('.header-help');

export default function addListener(params: IParams) {
  previous?.addEventListener('click', () => {
    if (params.level > 1) params.level--;
    installLevel(params);
  });

  next?.addEventListener('click', () => {
    if (params.level < 12) params.level++;
    installLevel(params);
  });

  enterBtn?.addEventListener('click', () => {
    inputHandler(input, params);
    enterBtn.classList.add('pressing');
  });
  enterBtn?.addEventListener('animationend', () => {
    enterBtn.classList.remove('pressing');
  });

  input?.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      enterBtn?.classList.add('pressing');
      inputHandler(input, params);
    }
  });

  menuBtn?.addEventListener('click', () => {
    burger?.classList.toggle('open');
    menuBtn?.classList.toggle('open');
    const currentLevelItem = burger?.querySelector(
      `[data-level-number="${params.level}"]`
    );
    if (menuBtn?.classList.contains('open')) {
      currentLevelItem?.classList.add('current');
    } else {
      currentLevelItem?.classList.remove('current');
    }
  });

  window.addEventListener('beforeunload', () => {
    localStorage.setItem('levelParams', JSON.stringify(params));
  });

  help?.addEventListener('click', () => {
    let count = 0;
    const typing = setInterval(() => {
      input.value += params.answer.charAt(count);
      count++;
      if (count === params.answer.length) {
        clearInterval(typing);
      }
    }, 400);
    params.hint[params.level] = true;
  });
}

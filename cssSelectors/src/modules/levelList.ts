import { LevelNumber } from '../enum/levelNumber';
import { Syntax } from '../enum/syntax';
import { IParams } from '../models/params.model';
import { getElement, resetParams } from './helpers';
import installLevel from './installLevel';

const burger = getElement('.burger-menu');
const menuBtn = getElement('.level-menu-wrapper');

export default function addLevelList(params: IParams) {
  const fragment = document.createDocumentFragment();
  const header = document.createElement('h2');
  header.classList.add('level-text');
  header.textContent = 'Choose a level';
  fragment.appendChild(header);

  const ul = document.createElement('ul');
  for (let i = 1; i <= 12; i++) {
    const tick = params.completion[i]
      ? '<span class="tick completed"></span>'
      : '<span class="tick"></span>';

    const hint = params.hint[i]
      ? '<span class="use-hint">a hint was used</span>'
      : '<span class="use-hint"></span>';

    const level = `<span class="level-number">${i}</span>`;
    const li = document.createElement('li');
    li.classList.add('level-item');
    li.dataset.levelNumber = String(i);
    const key = LevelNumber[i] as keyof typeof Syntax;
    const content = `${tick} ${level} ${Syntax[key]} ${hint}`;
    li.addEventListener('click', () => {
      params.level = Number(li.dataset.levelNumber);
      installLevel(params);
      burger?.classList.remove('open');
      menuBtn?.classList.remove('open');
    });
    li.innerHTML = content;
    ul.append(li);
  }

  fragment.appendChild(ul);
  const reset = document.createElement('button');
  reset.classList.add('reset-level');
  reset.textContent = 'Reset Progress';
  reset.addEventListener('click', () => {
    resetParams(params);
    burger?.classList.remove('open');
    menuBtn?.classList.remove('open');
    ul.querySelectorAll('span').forEach((span) => {
      if (span.classList.contains('completed')) {
        span.classList.remove('completed');
      } else if (span.classList.contains('use-hint')) {
        span.textContent = '';
      }
      // span.classList.remove('completed');
    });
    installLevel(params);
  });
  fragment.appendChild(reset);

  if (burger) {
    burger.innerHTML = '';
    burger.appendChild(fragment);
  }
}

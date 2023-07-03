import { LevelNumber } from '../enum/levelNumber';
import { Syntax } from '../enum/syntax';
import { IParams } from '../models/params.model';
import eventListener from '../observers/eventListener';
import helper from './helper';

class LevelList {
  private burger: HTMLDivElement;

  constructor() {
    this.burger = helper.getElement('.burger-menu') as HTMLDivElement;
  }

  public add(params: IParams) {
    const fragment = document.createDocumentFragment();
    const header = helper.createElement('h2', 'level-text', 'Choose a level');
    fragment.appendChild(header);

    const ul = this.createElemUl(params);
    fragment.appendChild(ul);

    const resetBtm = helper.createElement(
      'button',
      'reset-level',
      'Reset Progress'
    ) as HTMLButtonElement;

    eventListener.listenResetBtn(params, resetBtm, ul);
    fragment.appendChild(resetBtm);
    this.burger.appendChild(fragment);
  }

  private createElemUl(params: IParams) {
    const ul = helper.createElement('ul', null, null) as HTMLUListElement;

    for (let i = 1; i <= 12; i++) {
      const tick = params.completion[i]
        ? '<span class="tick completed"></span>'
        : '<span class="tick"></span>';
      const hint = params.hint[i]
        ? '<span class="use-hint">(a hint was used)</span>'
        : '<span class="use-hint"></span>';
      const levelNumber = `<span class="level-number">${i}</span>`;

      const key = LevelNumber[i] as keyof typeof Syntax;
      const content = `${tick} ${levelNumber} ${Syntax[key]} ${hint}`;

      const li = helper.createElement(
        'li',
        'level-item',
        null
      ) as HTMLLIElement;
      li.dataset.levelNumber = String(i);
      li.innerHTML = content;

      eventListener.switchLevel(params, li);
      ul.append(li);
    }
    return ul;
  }

  public markingLevelWithHint(params: IParams) {
    const currentLevelItem = helper.getElement(
      `[data-level-number="${params.level}"]`
    ) as HTMLLIElement;

    Array.from(currentLevelItem.children).forEach((span) => {
      if (span.classList.contains('tick')) span.classList.add('completed');
      if (span.classList.contains('use-hint') && params.hint[params.level]) {
        span.textContent = '(a hint was used)';
      }
    });
  }

  public markCurrentLevel(params: IParams) {
    Array.from(this.burger.querySelectorAll('li')).forEach((li) => {
      if (li.dataset.levelNumber === String(params.level)) {
        li.classList.add('current');
      } else {
        li.classList.remove('current');
      }
    });
  }
}

export default new LevelList();

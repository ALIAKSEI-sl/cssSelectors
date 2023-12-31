import { IParams } from '../models/params.model';
import helper from '../modules/helper';
import level from '../modules/level';
import levelList from '../modules/levelList';
import decorator from './decorator';
import resultValidator from './resultValidator';

class EventListener {
  private input: HTMLInputElement;

  private enterBtn: HTMLDivElement;

  private previous: HTMLAnchorElement;

  private next: HTMLAnchorElement;

  private menuBtn: HTMLDivElement;

  private burger: HTMLDivElement;

  private help: HTMLButtonElement;

  private ide: HTMLDivElement;

  private buttonOk: HTMLButtonElement;

  private buttonReset: HTMLButtonElement;

  private sidebarMenu: HTMLElement;

  constructor(private levelsCount: number) {
    this.levelsCount = levelsCount;
    this.input = helper.getElement('.input-selector') as HTMLInputElement;
    this.enterBtn = helper.getElement('.button-enter') as HTMLDivElement;
    this.previous = helper.getElement('.previous-level') as HTMLAnchorElement;
    this.next = helper.getElement('.next-level') as HTMLAnchorElement;
    this.menuBtn = helper.getElement('.level-menu-wrapper') as HTMLDivElement;
    this.burger = helper.getElement('.burger-menu') as HTMLDivElement;
    this.help = helper.getElement('.header-help') as HTMLButtonElement;
    this.ide = helper.getElement('.ide-container') as HTMLDivElement;
    this.buttonOk = helper.getElement('.button-ok') as HTMLButtonElement;
    this.buttonReset = helper.getElement('.button-reset') as HTMLButtonElement;
    this.sidebarMenu = helper.getElement('.sidebar-menu') as HTMLElement;
  }

  public listen(params: IParams) {
    this.previous.addEventListener('click', () => {
      if (params.level > 1) params.level--;
      level.change(params);
    });

    this.next.addEventListener('click', () => {
      if (params.level < 12) params.level++;
      level.change(params);
    });

    this.enterBtn.addEventListener('click', () => {
      this.checkAnswer(params);
    });

    this.input.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter') this.checkAnswer(params);
    });

    this.input.addEventListener('input', (event: Event) => {
      const input = event.target as HTMLInputElement;
      const hasValue = input.value !== '';
      input.classList.toggle('blink', !hasValue);
    });

    this.enterBtn.addEventListener('animationend', () => {
      this.enterBtn.classList.remove('pressing');
    });

    this.menuBtn.addEventListener('click', () => {
      this.toggleBurgerMenu(params);
    });

    this.help.addEventListener('click', () => {
      this.showHint(params);
    });

    this.ide.addEventListener('animationend', () => {
      this.ide.classList.remove('oscillation');
    });

    this.buttonOk.addEventListener('click', () => {
      decorator.hidePopUp();
    });

    this.buttonReset.addEventListener('click', () => {
      const ul = helper.getElement('.burger-menu ul') as HTMLUListElement;
      this.resetLevel(params, ul);
      decorator.hidePopUp();
    });

    window.addEventListener('beforeunload', () => {
      localStorage.setItem('levelParams', JSON.stringify(params));
    });
  }

  private checkAnswer(params: IParams) {
    this.enterBtn.classList.add('pressing');
    resultValidator.checkAnswer(params, this.ide, this.input);
  }

  private toggleBurgerMenu(params: IParams) {
    this.burger.classList.toggle('open');
    this.menuBtn.classList.toggle('open');
    this.sidebarMenu.classList.toggle('no-scroll');

    if (this.burger.classList.contains('open')) {
      levelList.markCurrentLevel(params);
    }
  }

  private showHint(params: IParams) {
    this.help.disabled = true;
    let count = 0;
    this.input.value = '';
    const typing = setInterval(() => {
      this.input.value += params.answer.charAt(count);
      count++;
      if (count === params.answer.length) {
        clearInterval(typing);
        this.help.disabled = false;
      }
    }, 400);
    params.hint[params.level] = true;
  }

  public switchLevel(params: IParams, li: HTMLLIElement) {
    li.addEventListener('click', () => {
      this.toggleBurgerMenu(params);
      params.level = Number(li.dataset.levelNumber);
      level.change(params);
    });
  }

  public nextLevel(params: IParams, element: Element) {
    element.addEventListener('animationend', () => {
      const lastLevel = this.levelsCount;
      params.completion[params.level] = true;
      params.level = params.level === lastLevel ? 1 : params.level + 1;
      level.change(params);
      levelList.markCurrentLevel(params);
    });
  }

  private resetLevel(params: IParams, ul: HTMLUListElement) {
    helper.resetParams(params);
    level.change(params);

    ul.querySelectorAll('span').forEach((span) => {
      if (span.classList.contains('completed')) {
        span.classList.remove('completed');
      } else if (span.classList.contains('use-hint')) {
        span.textContent = '';
      }
    });
  }

  public listenResetBtn(
    params: IParams,
    resetBtm: HTMLButtonElement,
    ul: HTMLUListElement
  ) {
    resetBtm.addEventListener('click', () => {
      this.toggleBurgerMenu(params);
      this.resetLevel(params, ul);
    });
  }
}

export default new EventListener(12);

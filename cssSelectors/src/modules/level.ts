import { IParams } from '../models/params.model';
import decorator from '../observers/decorator';
import level from '../store/levelStore';
import helper from './helper';

class Level {
  private headerCase: HTMLHeadingElement;

  private levelText: HTMLSpanElement;

  private selectorName: HTMLParagraphElement;

  private title: HTMLParagraphElement;

  private syntax: HTMLParagraphElement;

  private hint: HTMLParagraphElement;

  private examples: HTMLParagraphElement[];

  private tableCloth: HTMLDivElement;

  private htmlIde: HTMLElement;

  private tick: HTMLSpanElement;

  constructor() {
    this.headerCase = helper.getElement('.header-case') as HTMLHeadingElement;
    this.levelText = helper.getElement('.level-text') as HTMLSpanElement;
    this.selectorName = helper.getElement(
      '.selector-name'
    ) as HTMLParagraphElement;
    this.title = helper.getElement('.title') as HTMLParagraphElement;
    this.syntax = helper.getElement('.syntax') as HTMLParagraphElement;
    this.hint = helper.getElement('.hint') as HTMLParagraphElement;
    this.examples = helper.getAllElement('.examples') as HTMLParagraphElement[];
    this.tableCloth = helper.getElement('.tablecloth') as HTMLDivElement;
    this.htmlIde = helper.getElement('.markup') as HTMLElement;
    this.tick = helper.getElement('.tick') as HTMLSpanElement;
  }

  public change(params: IParams) {
    if (params.completion.includes(false)) {
      const data = level.getLevel(params.level);
      params.answer = data.answer;

      this.headerCase.textContent = data.case;
      this.levelText.textContent = data.level;
      this.selectorName.textContent = data.selectorName;
      this.title.textContent = data.title;
      this.syntax.textContent = data.syntax;
      this.hint.innerHTML = data.hint;
      this.examples[0].innerHTML = data.exampleFirst;
      this.examples[1].innerHTML = data.exampleSecond;
      this.tableCloth.innerHTML = data.tableInner;
      this.htmlIde.innerHTML = data.ideInner;

      if (params.completion[params.level]) {
        this.tick.classList.add('completed');
      } else {
        this.tick.classList.remove('completed');
      }

      decorator.highlightElements();
    } else {
      this.tick.classList.add('completed');
      decorator.showPopUp();
    }
  }
}

export default new Level();

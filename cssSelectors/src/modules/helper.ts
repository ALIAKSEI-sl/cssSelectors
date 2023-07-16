import { IParams } from '../models/params.model';

class Helper {
  private initialCompletion: boolean[];

  private initialHint: boolean[];

  constructor(private levelsCount: number) {
    this.levelsCount = levelsCount;
    this.initialCompletion = Array(levelsCount).fill(false);
    this.initialHint = Array(levelsCount).fill(false);
  }

  public getElement(selector: string) {
    return document.querySelector(selector) as Element;
  }

  public getAllElement(selector: string): Element[] {
    return Array.from(document.querySelectorAll(selector));
  }

  public getAllElementOnTable(
    selector: string,
    table: HTMLDivElement
  ): Element[] {
    return Array.from(table.querySelectorAll(selector));
  }

  public createElement(
    tag: string,
    classElem: string | null,
    content: string | null
  ): Element {
    const elem = document.createElement(tag);
    if (classElem) elem.classList.add(classElem);
    if (content) elem.textContent = content;
    return elem;
  }

  public createParams() {
    return {
      level: 1,
      answer: '',
      completion: [null, ...this.initialCompletion],
      hint: [null, ...this.initialHint],
    };
  }

  public resetParams(param: IParams) {
    param.level = 1;
    param.completion = [null, ...Array(this.levelsCount).fill(false)];
    param.hint = [null, ...Array(this.levelsCount).fill(false)];
  }
}

export default new Helper(12);

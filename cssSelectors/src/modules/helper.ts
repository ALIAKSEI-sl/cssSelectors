import { IParams } from '../models/params.model';

class Helper {
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
      completion: [
        null,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      hint: [
        null,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
  }

  public resetParams(param: IParams) {
    param.level = 1;
    param.completion = [
      null,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
    param.hint = [
      null,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ];
  }
}

export default new Helper();

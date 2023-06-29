import { IParams } from '../models/params.model';

export function getElement(selector: string): Element | null {
  return document.querySelector(selector);
}

export function getAllElement(selector: string): Element[] {
  return Array.from(document.querySelectorAll(selector));
}

export function getAllElementOnTable(
  selector: string,
  elem: Element | null
): Element[] {
  return elem ? Array.from(elem?.querySelectorAll(selector)) : [];
}

export function createParams() {
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

export function resetParams(param: IParams) {
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

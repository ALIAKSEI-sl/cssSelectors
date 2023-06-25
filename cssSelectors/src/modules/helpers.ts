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

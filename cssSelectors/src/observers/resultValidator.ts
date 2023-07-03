import { IParams } from '../models/params.model';
import helper from '../modules/helper';
import level from '../modules/level';
import levelList from '../modules/levelList';
import eventListener from './eventListener';

class ResultValidator {
  private tableCloth: HTMLDivElement;

  constructor() {
    this.tableCloth = helper.getElement('.tablecloth') as HTMLDivElement;
  }

  public checkAnswer(
    params: IParams,
    ide: HTMLDivElement,
    input: HTMLInputElement
  ) {
    const value = input.value.trim();
    const isNumber = this.isValueNumber(params, value);
    if (!isNumber) {
      try {
        const elements = helper.getAllElementOnTable(value, this.tableCloth);
        if (value === params.answer) {
          this.validResult(params, elements);
        } else {
          this.invalidResult(elements, ide);
        }
      } catch {
        ide.classList.add('oscillation');
      }
    }

    input.classList.add('blink');
    input.value = '';
  }

  private isValueNumber(params: IParams, value: string) {
    const number = Number(value);
    if (number && Number.isInteger(number) && number > 0 && number < 13) {
      params.level = number;
      level.change(params);
      return true;
    }
    return false;
  }

  private validResult(params: IParams, elements: Element[]) {
    elements.forEach((elem) => elem.classList.add('disappear'));
    const lastElement = elements[elements.length - 1];
    eventListener.nextLevel(params, lastElement);
    levelList.markingLevelWithHint(params);
  }

  private invalidResult(elements: Element[], ide: HTMLDivElement) {
    if (elements.length) {
      elements.forEach((elem) => elem.classList.add('oscillation'));
      const lastElement = elements[elements.length - 1];

      const animationEnd = () => {
        elements.forEach((elem) => elem.classList.remove('oscillation'));
        lastElement.removeEventListener('animationend', animationEnd);
      };

      lastElement.addEventListener('animationend', animationEnd);
    } else {
      ide.classList.add('oscillation');
    }
  }
}

export default new ResultValidator();

import { IdeInner } from '../src/enum/ideInner';
import helper from '../src/modules/helper';
import level from '../src/modules/level';
import levelStore from '../src/store/levelStore';

describe('level content', () => {
  level.headerCase = helper.createElement(
    'h1',
    'header-case',
    null
  ) as HTMLHeadingElement;
  level.levelText = helper.createElement(
    'span',
    'level-text',
    null
  ) as HTMLSpanElement;
  level.selectorName = helper.createElement(
    'p',
    'selector-name',
    null
  ) as HTMLParagraphElement;
  level.title = helper.createElement(
    'p',
    'title',
    null
  ) as HTMLParagraphElement;
  level.syntax = helper.createElement(
    'p',
    'syntax',
    null
  ) as HTMLParagraphElement;
  level.hint = helper.createElement('p', 'hint', null) as HTMLParagraphElement;
  level.examples = [
    helper.createElement('p', 'examples', null) as HTMLParagraphElement,
    helper.createElement('p', 'examples', null) as HTMLParagraphElement,
  ];
  level.tableCloth = helper.createElement(
    'div',
    'tablecloth',
    null
  ) as HTMLDivElement;
  level.htmlIde = helper.createElement('code', 'markup', null) as HTMLElement;
  level.progress = helper.createElement(
    'div',
    'progress',
    null
  ) as HTMLDivElement;
  level.tick = helper.createElement('div', 'tick', null) as HTMLDivElement;
  const params = helper.createParams();
  level.change(params);

  const data = levelStore.getLevel(params.level);

  test('content htmlIde', () => {
    expect(level.htmlIde.innerHTML).toBe(IdeInner.one);
  });

  test('content header Case', () => {
    expect(level.headerCase.innerHTML).toBe(data.case);
  });

  test('content selector Name', () => {
    expect(level.selectorName.innerHTML).toBe(data.selectorName);
  });

  test('content title', () => {
    expect(level.title.innerHTML).toBe(data.title);
  });

  test('content syntax', () => {
    expect(level.syntax.innerHTML).toBe(data.syntax);
  });

  test('content tablecloth', () => {
    expect(level.tableCloth.innerHTML).toBe(data.tableInner);
  });

  test('content progress', () => {
    expect(level.progress.style.width).toBe(`${(100 / 12) * params.level}%`);
  });

  test('tick completed ', () => {
    expect(level.tick.classList.contains('completed')).toBe(false);
  });
});

import { IParams } from '../models/params.model';
import { getAllElement, getElement } from './helpers';
import level from './levelStore';

const headerCase = getElement('.header-case');
const levelText = getElement('.level-text');
const selectorName = getElement('.selector-name');
const title = getElement('.title');
const syntax = getElement('.syntax');
const hint = getElement('.hint');
const examples = getAllElement('.examples');
const tableCloth = getElement('.tablecloth');

export default function installLevel(params: IParams) {
  const data = level.getLevel(params.level);
  params.answer = data.answer;
  if (headerCase) headerCase.textContent = data.case;
  if (levelText) levelText.textContent = data.level;
  if (selectorName) selectorName.textContent = data.selectorName;
  if (title) title.textContent = data.title;
  if (syntax) syntax.textContent = data.syntax;
  if (hint) hint.innerHTML = data.hint;
  if (examples) {
    examples[0].innerHTML = data.exampleFirst;
    examples[1].innerHTML = data.exampleSecond;
  }
  if (tableCloth) tableCloth.innerHTML = data.tableInner;
}

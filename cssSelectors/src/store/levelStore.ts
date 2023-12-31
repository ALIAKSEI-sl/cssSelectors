import { IdeInner } from '../enum/ideInner';
import { LevelNumber } from '../enum/levelNumber';
import { Syntax } from '../enum/syntax';
import { TableInner } from '../enum/tableInner';
import { ILevel, ILevelStore } from '../models/levelStore.model';

class LevelStore implements ILevelStore {
  getLevel(num: number): ILevel {
    return this[LevelNumber[num] as keyof this]();
  }

  one() {
    return {
      case: 'Select the plates',
      level: 'Level 1 of 12',
      selectorName: 'Type Selector',
      title: 'Select elements by their type',
      syntax: Syntax.one,
      hint: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
      exampleFirst: '<strong>div</strong> selects all <tag>div</tag> elements.',
      exampleSecond: '<strong>p</strong> selects all <tag>p</tag> elements.',
      answer: 'my-plate',
      tableInner: TableInner.one,
      ideInner: IdeInner.one,
    };
  }

  two() {
    return {
      case: 'Select the bento boxes',
      level: 'Level 2 of 12',
      selectorName: 'Type Selector',
      title: 'Select elements by their type',
      syntax: Syntax.two,
      hint: 'Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.',
      exampleFirst: '<strong>div</strong> selects all <tag>div</tag> elements.',
      exampleSecond: '<strong>p</strong> selects all <tag>p</tag> elements.',
      answer: 'my-bento',
      tableInner: TableInner.two,
      ideInner: IdeInner.two,
    };
  }

  three() {
    return {
      case: 'Select the elegant plate',
      level: 'Level 3 of 12',
      selectorName: 'ID Selector',
      title: 'Select elements with an ID',
      syntax: Syntax.three,
      hint: 'Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector',
      exampleFirst:
        '<strong>#cool</strong> selects any element with <strong>id="cool"</strong>',
      exampleSecond: '<strong>ul#long</strong> selects <tag>ul id="long"</tag>',
      answer: '#elegant',
      tableInner: TableInner.three,
      ideInner: IdeInner.three,
    };
  }

  four() {
    return {
      case: 'Select the apple on the plate',
      level: 'Level 4 of 12',
      selectorName: 'Descendant Selector',
      title: 'Select an element inside another element',
      syntax: Syntax.four,
      hint: 'Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.',
      exampleFirst:
        '<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>',
      exampleSecond:
        '<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id="fancy"</strong>',
      answer: 'my-plate my-apple',
      tableInner: TableInner.four,
      ideInner: IdeInner.four,
    };
  }

  five() {
    return {
      case: 'Select the pickle on the fancy plate',
      level: 'Level 5 of 12',
      selectorName: 'Combine the Descendant & ID Selectors',
      title: 'Select an element inside another element',
      syntax: Syntax.five,
      hint: 'You can combine any selector with the descendent selector.',
      exampleFirst:
        '<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id="cool"</strong>',
      exampleSecond: '',
      answer: '#elegant my-pickle',
      tableInner: TableInner.five,
      ideInner: IdeInner.five,
    };
  }

  six() {
    return {
      case: 'Select the small apples',
      level: 'Level 6 of 12',
      selectorName: 'Class Selector',
      title: 'Select elements by their class',
      syntax: Syntax.six,
      hint: 'The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.',
      exampleFirst:
        '<strong>.neato</strong> selects all elements with <strong>class="neato"</strong>',
      exampleSecond: '',
      answer: '.small',
      tableInner: TableInner.six,
      ideInner: IdeInner.six,
    };
  }

  seven() {
    return {
      case: 'Select the small oranges',
      level: 'Level 7 of 12',
      selectorName: '',
      title: 'Combine the Class Selector',
      syntax: Syntax.seven,
      hint: 'You can combine the class selector with other selectors, like the type selector.',
      exampleFirst:
        '<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class="important"</strong>',
      exampleSecond:
        '<strong>#big.wide</strong> selects all elements with <strong>id="big"</strong> that also have <strong>class="wide"</strong>',
      answer: 'my-orange.small',
      tableInner: TableInner.seven,
      ideInner: IdeInner.seven,
    };
  }

  eight() {
    return {
      case: 'Select the small oranges in the bentos',
      level: 'Level 8 of 12 ',
      selectorName: '',
      title: 'You can do it...',
      syntax: Syntax.eight,
      hint: 'Combine what you learned in the last few levels to solve this one!',
      exampleFirst: '',
      exampleSecond: '',
      answer: 'my-bento my-orange.small',
      tableInner: TableInner.eight,
      ideInner: IdeInner.eight,
    };
  }

  nine() {
    return {
      case: 'Select all the plates and bentos',
      level: 'Level 9 of 12',
      selectorName: 'Comma Combinator',
      title: 'Combine, selectors, with... commas!',
      syntax: Syntax.nine,
      hint: 'Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.',
      exampleFirst:
        '<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class="fun"</strong>',
      exampleSecond:
        '<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements',
      answer: 'my-plate, my-bento',
      tableInner: TableInner.nine,
      ideInner: IdeInner.nine,
    };
  }

  ten() {
    return {
      case: 'Select all the things!',
      level: 'Level 10 of 12',
      selectorName: 'The Universal Selector',
      title: 'You can select everything!',
      syntax: Syntax.ten,
      hint: 'You can select all elements with the universal selector!',
      exampleFirst:
        '<strong>p *</strong> selects any element inside all <tag>p</tag> elements.',
      exampleSecond: '',
      answer: '*',
      tableInner: TableInner.ten,
      ideInner: IdeInner.ten,
    };
  }

  eleven() {
    return {
      case: 'Select everything on a plate',
      level: 'Level 11 of 12',
      selectorName: '',
      title: 'Combine the Universal Selector',
      syntax: Syntax.eleven,
      hint: 'This selects all elements inside of <strong>A</strong>.',
      exampleFirst:
        '<strong>p *</strong> selects every element inside all <tag>p</tag> elements.',
      exampleSecond:
        '<strong>ul.fancy *</strong> selects every element inside all <tag>ul class="fancy"</tag> elements.',
      answer: 'my-plate *',
      tableInner: TableInner.eleven,
      ideInner: IdeInner.eleven,
    };
  }

  twelve() {
    return {
      case: "Select every apple that's next to a plate",
      level: 'Level 12 of 12',
      selectorName: 'Adjacent Sibling Selector',
      title: 'Select an element that directly follows another element',
      syntax: Syntax.twelve,
      hint: "This selects all <strong>B</strong> elements that directly follow <strong>A</strong>. Elements that follow one another are called siblings. They're on the same level, or depth. <br><br>In the HTML markup for this level, elements that have the same indentation are siblings.",
      exampleFirst:
        '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',
      exampleSecond:
        '<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>',
      answer: 'my-plate + my-apple',
      tableInner: TableInner.twelve,
      ideInner: IdeInner.twelve,
    };
  }
}

export default new LevelStore();

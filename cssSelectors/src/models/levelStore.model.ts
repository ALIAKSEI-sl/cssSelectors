export interface ILevelStore {
  getLevel: (num: number) => ILevel;
  one: () => ILevel;
  two: () => ILevel;
  three: () => ILevel;
  four: () => ILevel;
  five: () => ILevel;
  six: () => ILevel;
  seven: () => ILevel;
  eight: () => ILevel;
  nine: () => ILevel;
  ten: () => ILevel;
  eleven: () => ILevel;
  twelve: () => ILevel;
}

interface ILevel {
  case: string;
  level: string;
  selectorName: string;
  title: string;
  syntax: string;
  hint: string;
  exampleFirst: string;
  exampleSecond: string;
  tableInner: string;
  answer: string;
}

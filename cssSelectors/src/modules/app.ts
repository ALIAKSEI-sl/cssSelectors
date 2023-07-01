import { IParams } from '../models/params.model';
import eventListener from '../observers/eventListener';
import CustomElements from './customElements';
import helper from './helper';
import level from './level';
import levelList from './levelList';

class App {
  private params: IParams;

  constructor() {
    const paramFromStorage = localStorage.getItem('levelParams');
    this.params = paramFromStorage
      ? JSON.parse(paramFromStorage)
      : helper.createParams();
  }

  public start() {
    CustomElements.create();
    level.change(this.params);
    levelList.add(this.params);
    eventListener.listen(this.params);
  }
}

export default new App();

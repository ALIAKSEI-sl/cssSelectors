import './elements.scss';
import { IParams } from './models/params.model';
import createCustomElements from './modules/customElements';
import { createParams } from './modules/helpers';
import installLevel from './modules/installLevel';
import addLevelList from './modules/levelList';
import addListener from './modules/listener';
import './style.scss';

const paramFromStorage = localStorage.getItem('levelParams');
const params: IParams = paramFromStorage
  ? JSON.parse(paramFromStorage)
  : createParams();

createCustomElements();
installLevel(params);
addListener(params);
addLevelList(params);

import {registerWorker} from './register';
import './manifest';

registerWorker();

document.querySelector('div.splash').remove();
document.querySelector('body').classList.remove('initial');

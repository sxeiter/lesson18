'use strict';
import '@babel/polyfill';
import 'nodelist-foreach-polyfill';


import sendForm from './modules/sendform';
import calc from './modules/calc';
import deleteword from './modules/deleteword';
import changephoto from './modules/changephoto';
import slider from './modules/slider';
import tabs from './modules/tabs';
import popup from './modules/popup';
import toggleMenu from './modules/toggleMenu';
import timer from './modules/timer';
import countTimer from './modules/timer';

countTimer();
toggleMenu();
timer();
popup();
tabs();
slider();
changephoto();
deleteword();
calc();
sendForm();
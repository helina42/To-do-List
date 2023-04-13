import _ from 'lodash';
import './style.css';
import { addtodo } from './modules/todolist.js';
import callList, { todoDB } from './modules/callList.js';
import { clear } from './modules/update';

const addbtn = document.getElementById('add');
const addlist = document.getElementById('userinput');
const clearbtn = document.getElementById('clearbtn');

const component = () => {
  for (let i = 0; i < todoDB.length; i++) {
    callList(todoDB[i].description, todoDB[i].index);
  }
};

addlist.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addbtn.click();
  }
});
addbtn.addEventListener('click', (e) => {
  addtodo(addlist.value, todoDB);
  callList(addlist.value);
  addlist.value = '';
});
clearbtn.addEventListener('click', (e) => {
  clear(todoDB);
});

window.addEventListener('load', component);

import _ from 'lodash';
import './style.css';
import { addtodo, removeTodo } from './modules/todolist.js';

const list = document.querySelector('.list');
const todoDB = JSON.parse(localStorage.getItem('info')) || [];
const addbtn = document.getElementById('add');
const addlist = document.getElementById('userinput');
const callList = (inputtext, index) => {
  const newlist = document.createElement('section');
  newlist.classList.add('todolist');
  newlist.id = `list${index}`;
  const div = document.createElement('div');
  div.classList.add('dolist');
  div.id = `dolist${index}`;
  const input = document.createElement('input');
  input.type = 'checkbox';
  const label = document.createElement('label');
  label.innerText = inputtext;
  const itag = document.createElement('i');
  itag.id = 'liimg';
  const del = document.createElement('i');
  del.classList.add('hide');
  del.classList.add('delete');
  del.id = index;

  div.appendChild(input);
  div.appendChild(label);
  newlist.appendChild(div);
  newlist.appendChild(itag);
  newlist.appendChild(del);
  list.appendChild(newlist);

  newlist.addEventListener('mouseover', (e) => {
    const target = document.getElementById(`list${index}`);
    const { children } = target;
    children[2].classList.remove('hide');
    children[1].classList.add('hide');
  });
  newlist.addEventListener('mouseleave', (e) => {
    const target = document.getElementById(`list${index}`);
    const { children } = target;
    children[2].classList.add('hide');
    children[1].classList.remove('hide');
  });
  del.addEventListener('click', (e) => {
    const id = index * 1;
    removeTodo(id, todoDB);
    e.target.parentNode.remove();
  });
};
const component = () => {
  for (let i = 0; i < todoDB.length; i++) {
    callList(todoDB[i].description, todoDB[i].index);
  }
};

addbtn.addEventListener('click', (e) => {
  addtodo(addlist.value, todoDB);
  callList(addlist.value);
});

window.addEventListener('load', component);

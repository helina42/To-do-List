import { edit, removeTodo, update } from './todolist.js';
import { status } from './update.js';

const list = document.querySelector('.list');
export const todoDB = JSON.parse(localStorage.getItem('info')) || [];

const callList = (inputtext, index) => {
  const newlist = document.createElement('section');
  newlist.classList.add('todolist');
  newlist.id = `list${index}`;
  const div = document.createElement('div');
  div.classList.add('dolist');
  div.id = `dolist${index}`;
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = `checkbox${index}`;
  const label = document.createElement('label');
  label.id = `userval${index}`;
  label.innerText = inputtext;
  label.setAttribute('contentEditable', 'true');
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
    // console.log('Before:', todoDB);
    const id = e.target.id * 1;
    console.log(id);
    const selected = removeTodo(id, todoDB);
    e.target.parentNode.remove();
    update(selected);
    // console.log('After:', todoDB);
    // console.log(todoDB.e.target);
    // update(todoDB);
  });
  label.addEventListener('input', (e) => {
    const inputValue = e.target.innerText;
    edit(index, todoDB, inputValue);
  });
  input.addEventListener('change', (e) => {
    const id = index * 1;
    status(id, todoDB);
    update(todoDB);
  });
};
export default callList;
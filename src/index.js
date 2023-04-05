// import _ from 'lodash';
import './style.css';

const todolist = [
  {
    index: 0,
    description: 'laundry',
    completed: false,
  },
  {
    index: 1,
    description: 'work out',
    completed: false,
  },
  {
    index: 2,
    description: 'study',
    completed: false,
  },
];
const list = document.querySelector('.list');

const component = () => {
  const newlist = document.createElement('section');
  newlist.classList.add('todolist');
  for (let i = 0; i < todolist.length; i++) {
  // todolist.forEach((todo) => {
    newlist.innerHTML = ` 
          <div class ="dolist">
              <input type="checkbox" id="listitem"/>
              <label for="listitem"> ${todolist[i].description}</label>
          </div>
          <i id =liimg></i>`;
  }
  list.appendChild(newlist);
};
window.addEventListener('load', component);

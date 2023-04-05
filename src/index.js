import _ from 'lodash';
import './style.css';

const worklist = [
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
  {
    index: 3,
    description: 'dance',
    completed: false,
  },
];
const list = document.querySelector('.list');

const component = () => {
  for (let i = 0; i < worklist.length; i++) {
    const newlist = document.createElement('section');
    newlist.classList.add('todolist');
    const div = document.createElement('div');
    div.classList.add('dolist');
    const input = document.createElement('input');
    input.type = 'checkbox';
    const label = document.createElement('label');
    label.innerText = worklist[i].description;
    const itag = document.createElement('i');
    itag.id = 'liimg';

    div.appendChild(input);
    div.appendChild(label);
    newlist.appendChild(div);
    newlist.appendChild(itag);
    list.appendChild(newlist);
  }
};
window.addEventListener('load', component);

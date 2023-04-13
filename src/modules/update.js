import { update } from './todolist.js';

export const status = (id, data) => {
  const datanew = data;
  const checkbox = document.getElementById(`checkbox${id}`);
  localStorage.getItem('info', JSON.stringify());
  console.log(checkbox);
  if (checkbox.checked) {
    datanew[id - 1].completed = true;
  } else {
    datanew[id - 1].completed = false;
  }
  update(datanew);
};

export const clear = (data) => {
  const toclear = data;
  const complete = toclear.filter((comp) => comp.completed === true);
  const cleared = toclear.filter((clear) => clear.completed === false);

  for (let i = 0; i < complete.length; i++) {
    const done = document.getElementById(`list${complete[i].index}`);
    done.remove();
  }
  for (let i = 0; i < cleared.length; i++) {
    cleared[i].index = i + 1;
  }
  update(cleared);
};
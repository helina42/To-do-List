export const addtodo = (userinput, data) => {
  let index = 1;
  const DB = data;
  if (data.length > 0) {
    index = data.length + 1;
  }
  const todoitem = { description: userinput, completed: false, index };
  DB.push(todoitem);
  localStorage.setItem('info', JSON.stringify(DB));
};
export const update = (data) => {
  localStorage.clear();
  localStorage.setItem('info', JSON.stringify(data));
};

export const removeTodo = (index, data) => {
  const remove = data;
  const filtered = remove.filter((remove) => remove.index !== index);
  for (let i = 0; i < filtered.length; i++) {
    filtered[i].index = i + 1;
  }
  update(filtered);
  window.location.reload();
};
export const edit = (index, data, inputval) => {
  const newData = data;
  newData[index - 1].description = inputval;
  update(newData);
};

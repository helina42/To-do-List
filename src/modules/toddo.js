import Todolist from './todolist.js';

export default class Todo {
  constructor(description, completed) {
    this.index = Todo.todolist.length;
    this.description = description;
    this.completed = completed;
  }
  // this.todolist = todolist;
// todo = new Todo();

// todo = this.todolist.addtodo(this.todoitem);

  setindex = (newIndex) => {
    this.index = newIndex;
    addtodo(newIndex);
  }

  updateCompleted = (completedValue) => {
    this.completed = completedValue;
    // completedValue = this.todolist.addtodo(todoitem);
  }
}

// call the todolist.addtodo (todoitem) function
// call update UI
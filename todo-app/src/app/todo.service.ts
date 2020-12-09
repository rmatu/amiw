import { Todo } from './app.component';
import { Injectable, ViewChild } from '@angular/core';
import { of } from 'rxjs';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private serviceTodos: Todo[] = [];
  private id = 8;

  constructor() {
    this.serviceTodos = this.checkTodos();
  }

  getTodos() {
    return of(this.serviceTodos);
  }

  addTodo(text: string) {
    if (text === '') return;
    const date = moment();

    console.log(date);
    this.serviceTodos.push({ text, done: false, id: this.id, date });
    this.id++;
    this.setLocalTodos();
  }

  clearTodos() {
    this.serviceTodos.splice(0, this.serviceTodos.length);
    localStorage.removeItem('todos');
  }

  setDoneTodo(id, todoItem) {
    const idx = this.serviceTodos.findIndex((el) => el.id === id);
    this.serviceTodos[idx].done = !this.serviceTodos[idx].done;

    if (this.serviceTodos[idx].done === true) {
      todoItem.classList.add('done');
    } else {
      todoItem.classList.remove('done');
    }
    this.setLocalTodos();
    console.log(this.serviceTodos);
  }

  checkTodos(): Todo[] {
    if (localStorage.getItem('todos') === null) {
      return [];
    } else {
      return JSON.parse(localStorage.getItem('todos'));
    }
  }

  deleteTodo(id) {
    let idx = this.serviceTodos
      .map((item) => {
        return item.id;
      })
      .indexOf(id);
    this.serviceTodos.splice(idx, 1);
    this.setLocalTodos();
  }

  setLocalTodos() {
    localStorage.setItem('todos', JSON.stringify(this.serviceTodos));
  }

  //  ! NOT WORKING
  deleteDoneTodos() {
    const newList = this.serviceTodos.filter((el) => el.done !== true);
    console.log(this.serviceTodos);
    this.serviceTodos = [...newList];
    console.log(this.serviceTodos);
  }
}

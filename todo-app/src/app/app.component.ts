import { TodoService } from './todo.service';
import { Component, ViewChild } from '@angular/core';
import { Moment } from 'moment';

export interface Todo {
  done: boolean;
  text: string;
  id: number;
  date: Moment;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public list: Todo[] = [];

  @ViewChild('in') in;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe((todos) => {
      this.list = todos;
    });
  }

  onAdd(text: string) {
    this.in.nativeElement.value = '';
    this.todoService.addTodo(text);
  }

  onClear() {
    this.todoService.clearTodos();
  }

  // ! NOT WORKING

  onDeleteDone() {
    this.todoService.deleteDoneTodos();
  }
}

import { Todo } from './../app.component';
import { Component, Input, OnInit } from '@angular/core';
import { TodoService } from './../todo.service';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  onDone(id, todoItem) {
    this.todoService.setDoneTodo(id, todoItem);
  }

  onDelete(id) {
    this.todoService.deleteTodo(id);
  }
}

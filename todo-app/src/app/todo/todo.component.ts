import { Todo } from './../app.component';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { TodoService } from './../todo.service';
@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('todoItem') t;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.t.nativeElement);
    if (this.todo.done === true) {
      this.t.nativeElement.classList.add('done');
    }
  }
  onDone(id, todoItem) {
    this.todoService.setDoneTodo(id, todoItem);
  }

  onDelete(id) {
    this.todoService.deleteTodo(id);
  }
}

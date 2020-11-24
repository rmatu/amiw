import { Component, ViewChild } from '@angular/core';

interface Todo {
  done: boolean;
  text: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public list: Todo[] = [];
  private id = 1;
  @ViewChild('in') in;

  onAdd(text: string) {
    if (text === '') return;
    this.list.push({ done: false, text, id: this.id });
    this.in.nativeElement.value = null;
    this.id++;
    console.log(this.list);
  }

  onDelete(id) {
    const newList = this.list.filter((el) => el.id !== id);
    this.list = newList;
  }

  onDone(id, todoItem) {
    const idx = this.list.findIndex((el) => el.id === id);
    this.list[idx].done = !this.list[idx].done;

    if (this.list[idx].done === true) {
      todoItem.classList.add('done');
    } else {
      todoItem.classList.remove('done');
    }
  }

  onClear() {
    this.list = [];
  }
}

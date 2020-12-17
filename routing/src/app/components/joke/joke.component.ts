import { Component, Input, OnInit } from '@angular/core';

export interface Joke {
  id: number;
  punchilne: string;
  setup: string;
  type: string;
}

@Component({
  selector: 'joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss'],
})
export class JokeComponent implements OnInit {
  @Input() joke: Joke;
  constructor() {}

  ngOnInit(): void {}
}

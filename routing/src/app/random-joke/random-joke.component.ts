import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';

@Component({
  selector: 'app-random-joke',
  templateUrl: './random-joke.component.html',
  styleUrls: ['./random-joke.component.scss'],
})
export class RandomJokeComponent implements OnInit {
  public randomJoke;

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.jokesService.apiRandomJoke().subscribe((data: any) => {
      console.log('random', data);
      this.randomJoke = data;
    });
  }
}

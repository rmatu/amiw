import { JokesService } from './../jokes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke-of-the-day',
  templateUrl: './joke-of-the-day.component.html',
  styleUrls: ['./joke-of-the-day.component.scss'],
})
export class JokeOfTheDayComponent implements OnInit {
  public jokeOfTheDay;

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.jokesService.apiJokeOfTheDay().subscribe((data: any) => {
      this.jokeOfTheDay = data.contents.jokes[0];
    });
  }
}

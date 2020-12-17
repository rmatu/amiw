import { Joke } from './../components/joke/joke.component';
import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
@Component({
  selector: 'app-programing-joke',
  templateUrl: './programing-joke.component.html',
  styleUrls: ['./programing-joke.component.scss'],
})
export class ProgramingJokeComponent implements OnInit {
  public programmingJokesList: Joke[];

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.jokesService.apiTenProgramingJokes().subscribe((data: any) => {
      console.log('random', data);
      this.programmingJokesList = data;
    });
  }
}

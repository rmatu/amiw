import { Component, OnInit } from '@angular/core';
import { JokesService } from '../jokes.service';
@Component({
  selector: 'app-programing-joke',
  templateUrl: './programing-joke.component.html',
  styleUrls: ['./programing-joke.component.scss'],
})
export class ProgramingJokeComponent implements OnInit {
  public programmingJoke;

  constructor(private jokesService: JokesService) {}

  ngOnInit(): void {
    this.jokesService.apiProgramingJoke().subscribe((data: any) => {
      console.log('programing', data);
      this.programmingJoke = data[0];
    });
  }
}

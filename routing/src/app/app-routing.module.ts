import { HomeComponent } from './home/home.component';
import { ProgramingJokeComponent } from './programing-joke/programing-joke.component';
import { RandomJokeComponent } from './random-joke/random-joke.component';
import { JokeOfTheDayComponent } from './joke-of-the-day/joke-of-the-day.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path: 'joke-of-the-day',
    component: JokeOfTheDayComponent,
  },
  {
    path: 'random-joke',
    component: RandomJokeComponent,
  },
  {
    path: 'programming',
    component: ProgramingJokeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [JokeOfTheDayComponent];

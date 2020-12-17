import { Injectable } from '@angular/core';
import { API } from '../constants';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class JokesService {
  constructor(private http: HttpClient) {}

  apiJokeOfTheDay() {
    return this.http.get(`${API}/jod`);
  }

  apiRandomJoke() {
    return this.http.get(`https://official-joke-api.appspot.com/random_joke`);
  }

  apiProgramingJoke() {
    return this.http.get(
      `https://official-joke-api.appspot.com/jokes/programming/random`
    );
  }
}

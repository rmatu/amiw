import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramingJokeComponent } from './programing-joke.component';

describe('ProgramingJokeComponent', () => {
  let component: ProgramingJokeComponent;
  let fixture: ComponentFixture<ProgramingJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramingJokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramingJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

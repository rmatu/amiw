import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeOfTheDayComponent } from './joke-of-the-day.component';

describe('JokeOfTheDayComponent', () => {
  let component: JokeOfTheDayComponent;
  let fixture: ComponentFixture<JokeOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

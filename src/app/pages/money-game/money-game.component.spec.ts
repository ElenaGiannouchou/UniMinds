import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyGameComponent } from './money-game.component';

describe('MoneyGameComponent', () => {
  let component: MoneyGameComponent;
  let fixture: ComponentFixture<MoneyGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

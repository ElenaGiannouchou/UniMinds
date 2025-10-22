import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyInstructionsComponent } from './money-instructions.component';

describe('MoneyInstructionsComponent', () => {
  let component: MoneyInstructionsComponent;
  let fixture: ComponentFixture<MoneyInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

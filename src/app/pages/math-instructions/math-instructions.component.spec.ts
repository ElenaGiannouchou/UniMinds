import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathInstructionsComponent } from './math-instructions.component';

describe('MathInstructionsComponent', () => {
  let component: MathInstructionsComponent;
  let fixture: ComponentFixture<MathInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodsInstructionsComponent } from './gods-instructions.component';

describe('GodsInstructionsComponent', () => {
  let component: GodsInstructionsComponent;
  let fixture: ComponentFixture<GodsInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodsInstructionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodsInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

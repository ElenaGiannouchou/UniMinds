import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodsGameComponent } from './gods-game.component';

describe('GodsGameComponent', () => {
  let component: GodsGameComponent;
  let fixture: ComponentFixture<GodsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GodsGameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

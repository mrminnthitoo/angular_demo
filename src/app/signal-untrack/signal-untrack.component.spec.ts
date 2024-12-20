import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalUntrackComponent } from './signal-untrack.component';

describe('SignalUntrackComponent', () => {
  let component: SignalUntrackComponent;
  let fixture: ComponentFixture<SignalUntrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalUntrackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalUntrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

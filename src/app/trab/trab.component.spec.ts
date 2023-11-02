import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabComponent } from './trab.component';

describe('TrabComponent', () => {
  let component: TrabComponent;
  let fixture: ComponentFixture<TrabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrabComponent]
    });
    fixture = TestBed.createComponent(TrabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

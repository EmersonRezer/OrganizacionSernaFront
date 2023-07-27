import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BienestarComponent } from './bienestar.component';

describe('BienestarComponent', () => {
  let component: BienestarComponent;
  let fixture: ComponentFixture<BienestarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BienestarComponent]
    });
    fixture = TestBed.createComponent(BienestarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

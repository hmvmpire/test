import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelsliderComponent } from './modelslider.component';

describe('ModelsliderComponent', () => {
  let component: ModelsliderComponent;
  let fixture: ComponentFixture<ModelsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

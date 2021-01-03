import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoCarousselComponent } from './logo-caroussel.component';

describe('LogoCarousselComponent', () => {
  let component: LogoCarousselComponent;
  let fixture: ComponentFixture<LogoCarousselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoCarousselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoCarousselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

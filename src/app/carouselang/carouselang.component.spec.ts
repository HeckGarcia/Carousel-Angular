import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselangComponent } from './carouselang.component';

describe('CarouselangComponent', () => {
  let component: CarouselangComponent;
  let fixture: ComponentFixture<CarouselangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarHeadingComponent } from './bar-heading.component';

describe('BarHeadingComponent', () => {
  let component: BarHeadingComponent;
  let fixture: ComponentFixture<BarHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

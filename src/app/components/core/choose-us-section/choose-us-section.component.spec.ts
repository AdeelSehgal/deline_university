import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUsSectionComponent } from './choose-us-section.component';

describe('ChooseUsSectionComponent', () => {
  let component: ChooseUsSectionComponent;
  let fixture: ComponentFixture<ChooseUsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseUsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseUsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

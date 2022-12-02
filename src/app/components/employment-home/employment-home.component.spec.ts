import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentHomeComponent } from './employment-home.component';

describe('EmploymentHomeComponent', () => {
  let component: EmploymentHomeComponent;
  let fixture: ComponentFixture<EmploymentHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmploymentHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmploymentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
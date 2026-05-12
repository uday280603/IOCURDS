import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerFormComponent } from './cricketer-form.component';

describe('CricketerFormComponent', () => {
  let component: CricketerFormComponent;
  let fixture: ComponentFixture<CricketerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketerFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

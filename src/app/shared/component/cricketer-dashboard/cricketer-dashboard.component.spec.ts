import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketerDashboardComponent } from './cricketer-dashboard.component';

describe('CricketerDashboardComponent', () => {
  let component: CricketerDashboardComponent;
  let fixture: ComponentFixture<CricketerDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CricketerDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CricketerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

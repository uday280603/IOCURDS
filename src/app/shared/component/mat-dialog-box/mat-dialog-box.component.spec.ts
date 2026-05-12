import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogBoxComponent } from './mat-dialog-box.component';

describe('MatDialogBoxComponent', () => {
  let component: MatDialogBoxComponent;
  let fixture: ComponentFixture<MatDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDialogBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

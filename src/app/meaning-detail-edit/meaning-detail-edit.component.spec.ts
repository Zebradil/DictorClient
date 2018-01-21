import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningDetailEditComponent } from './meaning-detail-edit.component';

describe('MeaningDetailEditComponent', () => {
  let component: MeaningDetailEditComponent;
  let fixture: ComponentFixture<MeaningDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaningDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaningDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

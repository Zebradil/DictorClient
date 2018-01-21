import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningContextDetailEditComponent } from './meaning-context-detail-edit.component';

describe('MeaningContextDetailEditComponent', () => {
  let component: MeaningContextDetailEditComponent;
  let fixture: ComponentFixture<MeaningContextDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaningContextDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaningContextDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

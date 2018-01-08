import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryDetailEditComponent } from './dictionary-detail-edit.component';

describe('DictionaryDetailEditComponent', () => {
  let component: DictionaryDetailEditComponent;
  let fixture: ComponentFixture<DictionaryDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

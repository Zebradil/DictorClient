import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLinkDetailEditComponent } from './article-link-detail-edit.component';

describe('ArticleLinkDetailEditComponent', () => {
  let component: ArticleLinkDetailEditComponent;
  let fixture: ComponentFixture<ArticleLinkDetailEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleLinkDetailEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLinkDetailEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

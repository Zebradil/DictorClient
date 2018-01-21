import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-link-detail-edit',
  templateUrl: './article-link-detail-edit.component.html',
  styleUrls: ['./article-link-detail-edit.component.scss']
})
export class ArticleLinkDetailEditComponent implements OnInit {

  @Input()
  linkForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

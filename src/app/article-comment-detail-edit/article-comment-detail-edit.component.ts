import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-comment-detail-edit',
  templateUrl: './article-comment-detail-edit.component.html',
  styleUrls: ['./article-comment-detail-edit.component.scss']
})
export class ArticleCommentDetailEditComponent implements OnInit {

  @Input()
  commentForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

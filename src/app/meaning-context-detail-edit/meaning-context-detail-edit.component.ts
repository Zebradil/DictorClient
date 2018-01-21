import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meaning-context-detail-edit',
  templateUrl: './meaning-context-detail-edit.component.html',
  styleUrls: ['./meaning-context-detail-edit.component.scss']
})
export class MeaningContextDetailEditComponent implements OnInit {

  @Input()
  meaningContextForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meaning-detail-edit',
  templateUrl: './meaning-detail-edit.component.html',
  styleUrls: ['./meaning-detail-edit.component.scss']
})
export class MeaningDetailEditComponent implements OnInit {

  @Input()
  meaningForm: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';
import { MeaningContext } from '../meaning-context';

@Component({
  selector: 'app-meaning-detail-edit',
  templateUrl: './meaning-detail-edit.component.html',
  styleUrls: ['./meaning-detail-edit.component.scss']
})
export class MeaningDetailEditComponent implements OnInit {

  @Input()
  meaningForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

  // TODO move this methods and methods from parent component to standalone class for form managing
  initContext(context: MeaningContext): FormGroup {
    return this.fb.group({
      text: [context.text, Validators.required],
      source: [context.source],
    });
  }

  getFormArray(form: FormGroup, name: string): FormArray {
    return form.controls[name] as FormArray;
  }

  addContext(contexts: FormArray): boolean {
    contexts.push(this.initContext(new MeaningContext()));
    return false;
  }
}

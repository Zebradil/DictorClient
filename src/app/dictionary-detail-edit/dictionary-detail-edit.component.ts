import { Component, OnInit } from '@angular/core';
import { Dictionary } from '../dictionary';
import { ActivatedRoute } from '@angular/router';
import { DictionaryService } from '../dictionary.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-dictionary-detail-edit',
  templateUrl: './dictionary-detail-edit.component.html',
  styleUrls: ['./dictionary-detail-edit.component.scss']
})
export class DictionaryDetailEditComponent implements OnInit {

  dictionary: Dictionary = new Dictionary(0, '');

  constructor(
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dictionaryService: DictionaryService,
  ) { }

  ngOnInit() {
    const dictionaryId = +this.activeRoute.snapshot.paramMap.get('dictionaryId');
    if (dictionaryId) {
      this.dictionaryService
        .getDictionary(dictionaryId)
        .subscribe(dictionary => this.dictionary = dictionary);
    }
  }

  onSubmit() {
    let saveResult: Observable<Dictionary>;
    if (this.dictionary.id) {
      saveResult = this.dictionaryService.updateDictionary(this.dictionary);
    } else {
      saveResult = this.dictionaryService.createDictionary(this.dictionary);
    }
    saveResult.subscribe(dictionary => this.router.navigate(['/dictionary/' + dictionary.id]));
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DictionaryService } from '../dictionary.service';
import { Dictionary } from '../dictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary: Dictionary;

  constructor(
    private activeRoute: ActivatedRoute,
    private dictionaryService: DictionaryService,
  ) { }

  ngOnInit(): void {
    this.getDictionary();
  }

  getDictionary(): void {
    const id = +this.activeRoute.snapshot.paramMap.get('dictionaryId');
    this.dictionaryService
      .getDictionary(id)
      .subscribe(dictionary => this.dictionary = dictionary);
  }
}

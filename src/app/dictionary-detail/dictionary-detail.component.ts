import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DictionaryService } from '../dictionary.service';
import { Location } from '@angular/common';
import { Dictionary } from '../dictionary';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.scss']
})
export class DictionaryDetailComponent implements OnInit {

  dictionary: Dictionary;

  constructor(
    private route: ActivatedRoute,
    private dictionaryService: DictionaryService,
  ) { }

  ngOnInit(): void {
    this.getDictionary();
  }

  getDictionary(): void {
    const id = +this.route.snapshot.paramMap.get('dictionaryId');
    this.dictionaryService
      .getDictionary(id)
      .subscribe(dictionary => this.dictionary = dictionary);
  }
}

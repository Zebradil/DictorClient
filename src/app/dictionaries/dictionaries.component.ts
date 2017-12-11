import { Component, OnInit } from '@angular/core';
import { Dictionary } from '../dictionary';
import { DictionaryService } from '../dictionary.service';

@Component({
  selector: 'app-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.css']
})
export class DictionariesComponent implements OnInit {

  selectedDictionary: Dictionary;
  dictionaries: Dictionary[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.getDictionaries();
  }

  getDictionaries(): void {
    this.dictionaryService
      .getDictionaries()
      .subscribe(dictionaries => this.dictionaries = dictionaries);
  }

  onSelect(dictionary: Dictionary): void {
    this.selectedDictionary = dictionary;
  }

}

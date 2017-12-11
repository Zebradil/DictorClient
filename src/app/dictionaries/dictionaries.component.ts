import { Component, OnInit } from '@angular/core';
import { Dictionary } from '../dictionary';
import { DictionaryService } from '../dictionary.service';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-dictionaries',
  templateUrl: './dictionaries.component.html',
  styleUrls: ['./dictionaries.component.scss']
})
export class DictionariesComponent implements OnInit {

  page = {
    title: 'Dictionaries',
  };

  site: object;

  selectedDictionary: Dictionary;
  dictionaries: Dictionary[];

  constructor(
    private dictionaryService: DictionaryService,
    private siteService: SiteService
  ) { }

  ngOnInit() {
    this.site = this.siteService.getSiteInfo();
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

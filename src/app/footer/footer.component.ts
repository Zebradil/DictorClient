import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  text: string;

  constructor(
    private siteService: SiteService
  ) { }

  ngOnInit() {
    this.text = this.siteService.getFooterText();
  }

}

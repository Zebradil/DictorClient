import { Component, OnInit } from '@angular/core';
import { SiteService } from '../site.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // TODO replace any by interface (SiteInfo for ex.)
  site: any;

  constructor(
    private siteService: SiteService
  ) { }

  ngOnInit() {
    this.site = this.siteService.getSiteInfo();
  }

}

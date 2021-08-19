import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'eyassu-ng-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  items!: MenuItem[];
  title!: string;

  constructor(private readonly titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle();

    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: ['/home'] },
      {
        label: 'Examples',
        items: [
          { label: 'Grid', icon: 'pi pi-home', routerLink: ['/grid'] }
        ]
      }

    ];
  }
}

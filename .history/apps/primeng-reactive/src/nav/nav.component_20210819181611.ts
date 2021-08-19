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
      {
        label: 'Examples',
        icon: 'pi pi-pw pi-file',
        items: [{
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            { label: 'User', icon: 'pi pi-fw pi-user-plus' },
            { label: 'Filter', icon: 'pi pi-fw pi-filter' }
          ]
        },
        { label: 'Open', icon: 'pi pi-fw pi-external-link' },
        { separator: true },
        { label: 'Quit', icon: 'pi pi-fw pi-times' }
        ]
      }
    ];
  }
}

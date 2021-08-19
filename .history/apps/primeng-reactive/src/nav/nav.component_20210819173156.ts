import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'eyassu-ng-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  title!: string;

  constructor(private readonly titleService: Title) { }

  ngOnInit(): void {
    this.title = this.titleService.getTitle();
  }

}

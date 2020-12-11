import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private titleService: Title) {}

  ngOnInit() {}

  get title(): string {
    return this.titleService.getTitle();
  }
}

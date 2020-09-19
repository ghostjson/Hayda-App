import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-link-card',
  templateUrl: './link-card.component.html',
  styleUrls: ['./link-card.component.scss'],
})
export class LinkCardComponent implements OnInit {

  @Input('contents') contents: { background: string, title: string, url: string }[];

  slideOptions = {
    spaceBetween: 10,
    slidesPerView: 1.8
  }

  constructor() { }

  ngOnInit() {
    
  }

  cardClick(url: string): void{
    window.open(url, '_system', 'location=yes');
  }

}

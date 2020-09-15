import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input('name') name: string;
  @Input('url') url: string;

  back: boolean;

  constructor() { }

  ngOnInit() {
    
    this.back = this.url !== undefined;
    console.log(this.back);
    
  }

}

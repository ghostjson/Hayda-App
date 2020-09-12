import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {


  @Input('name') name: string;
  @Input('back') back: boolean;

  constructor() { }

  ngOnInit() {
    console.log(this.back);
  }

}

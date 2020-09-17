import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  current_tab: string = 'who';

  constructor() { }

  ngOnInit() {
  }

    tabChanged($event: any) {
        this.current_tab = $event.detail.value;
    }

    isTab(tab_name: string){
      return this.current_tab === tab_name;
    }

  swipeLeft() {
    console.log('swipe_left');
  }
}

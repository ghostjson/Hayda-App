import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  faqs: {heading: string, content: string}[];
  current: number;

  constructor() { }

  ngOnInit() {
    this.faqs = [
      {
        heading: 'Who are the services you provide?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        heading: 'Who are the services you provide?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        heading: 'Who are the services you provide?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
      {
        heading: 'Who are the services you provide?',
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
      },
    ];

    this.current = -1;
  }

  faqClick(index: number) {
    this.current = this.current === index ? -1 : index;
  }

  activeIcon(i: number) {
    return {'active': this.current === i};
  }
}

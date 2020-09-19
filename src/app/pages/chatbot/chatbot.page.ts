import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MessageInterface} from "./message.interface";

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.page.html',
  styleUrls: ['./chatbot.page.scss'],
})
export class ChatbotPage implements OnInit {

  messages: MessageInterface[];

  constructor() { }

  ngOnInit() {
    this.messages = [
      {
        author: 'comp',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'comp',
        content: 'Lorem'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      },
      {
        author: 'user',
        content: 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 150'
      }
    ];
  }




}

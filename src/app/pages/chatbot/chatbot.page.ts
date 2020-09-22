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
        content: 'Hi imJohn, this is HAYDA Bot and I am here to assist you.  How can I help?'
      }
    ];
  }




}

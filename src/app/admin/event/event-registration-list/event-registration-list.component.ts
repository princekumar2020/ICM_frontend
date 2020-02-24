import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-registration-list',
  templateUrl: './event-registration-list.component.html',
  styleUrls: ['./event-registration-list.component.css']
})
export class EventRegistrationListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  List: any=[
    {
    "id":1,
    "heading":"fjgfgj",
    "sub_heading":"djfhdd",
    "sub_heading2":"jdfjdj",
    "sub_heading3":"kdfgdfjg"
    },
    
    {
      "id":2,
      "heading":"fjgfgj",
      "sub_heading":"djfhdd",
      "sub_heading2":"jdfjdj",
      "sub_heading3":"kdfjkdjkf"
      },

      {
        "id":3,
        "heading":"fjgfgj",
        "sub_heading":"djfhdd",
        "sub_heading2":"jdfjdj",
        "sub_heading3":"kdfjkdjkf"
        },

        {
          "id":4,
          "heading":"fjgfgj",
          "sub_heading":"djfhdd",
          "sub_heading2":"jdfjdj",
          "sub_heading3":"kdfjkdjkf"
          }
      ]



}

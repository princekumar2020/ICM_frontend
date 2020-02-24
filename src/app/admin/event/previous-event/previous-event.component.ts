import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-previous-event',
  templateUrl: './previous-event.component.html',
  styleUrls: ['./previous-event.component.css']
})
export class PreviousEventComponent implements OnInit {

  constructor() { }
  
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
          "id":3,
          "heading":"fjgfgj",
          "sub_heading":"djfhdd",
          "sub_heading2":"jdfjdj",
          "sub_heading3":"kdfjkdjkf"
          }
      ]
  ngOnInit() {
  }

}

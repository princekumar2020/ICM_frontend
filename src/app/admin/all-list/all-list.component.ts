import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.css']
})
export class ALLListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  List: any=[
    {
    "id":1,
    "heading":"Home",
    "sub_heading":"home1",
    "sub_heading2":"home2",
    "sub_heading3":"home3"
    },
    
    {
      "id":2,
      "heading":"About Us",
      "sub_heading":"about1",
      "sub_heading2":"about2",
      "sub_heading3":"about3"
      },

      {
        "id":3,
        "heading":"Research",
        "sub_heading":"research1",
        "sub_heading2":"research2",
        "sub_heading3":"research3"
        },

        {
          "id":3,
          "heading":"Contact Us",
          "sub_heading":"contact1",
          "sub_heading2":"contact2",
          "sub_heading3":"contact3"
          }
      ]
     
}

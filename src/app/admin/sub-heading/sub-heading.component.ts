import { Component, OnInit } from '@angular/core';
import { IcmApiRoutes } from 'src/app/model/classes/IcmApiRoutes';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-sub-heading',
  templateUrl: './sub-heading.component.html',
  styleUrls: ['./sub-heading.component.css']
})
export class SubHeadingComponent implements OnInit {

  constructor(private transfereService:AdminServiceService) { }
data:any
content:any;
subhead:any;
List:any=[
{
'heading':'about-us',
'subheading':[
 'about-icm',
 'our-team',
 'formal-chairman',
 'previous-high-commissioners',
 'indian-foreign-service'
]
},
{
  'heading':'media-center',
  'subheading':[
   'photo-gallery',
   'video-gallery'
  ]

},

{
  'heading':'news',
  'subheading':[
   'announcement'
  ]

},

{
  'heading':'events',
  'subheading':[
   'previous-events',
   'upcoming-events'
  ]
},
{
  'heading':'rti',
  'subheading':[
   'act',
   'rti-complain'
  ]
}
]


  ngOnInit() {
     this.data = this.transfereService.getData();  
     console.log(this.data);
    this.content=this.List.find(head=>{
      return head.heading==this.data;
    },
    )
    // console.log(this.content);
    this.subhead=this.content.subheading;
    // console.log(this.subhead);

  }

 


}

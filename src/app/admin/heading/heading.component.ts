import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {
selectedValue:string="";
selectedValue1:string
selectedValue2:string=""
selectedValue3:string=""
selectedFile:any;
heading:string;
headings:string=""
  content: any;
  subhead: any;
  second: any;
  constructor( private transfereService:AdminServiceService) { }

  table:any=[]


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

    ngOnInit() 
    {

    }


    handler(event)
     {
   this.selectedFile=event[0];
   this.label.resume=this.selectedFile

     }

    public label:any = {
      title:'',
      label1 : '',
      label2 : '',
      resume:''
    };
    
     


    // handler(files: FileList) {
    //   this.category.category_banner = '/categories/download/' + files[0].name;
    //   this.formData.append('category_banner', files[0], files[0].name);
    //   this.categoryContainersService.uploadFile(this.formData).subscribe(filename => console.log(files[0].name));
    // }

    
getlabel2(event:any)
{
this.second=(event.target.value)

}

getlabel() {

  this.content=this.List.find(head=>{
    return head.heading==this.label.label1;
  },
  // console.log(this.content)
  )

  if(this.content==undefined)
  {
    this.subhead="";
  }
  else{

  this.subhead=this.content.subheading;
  }

}



   submit()
   {

    var list:any={
      "first":this.label.label1,
      'second':this.label.label2,
      'third':'third'
       }
     this.table.push(list);
     console.log(this.label);
    

   this.label.label1="";
   this.subhead=[];

   }








}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as $ from "jquery";
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  picker:any;
  myPage:FormGroup
  postId: string;
  List: any;
  getbyid: any;
  selected:any;
  minDate:any= new Date();
constructor(private _userSer : UserService, private fb: FormBuilder ) {}
public Editor = ClassicEditor;


  ngOnInit() {

    this.myPage = this.fb.group(
      {
        title: ["", Validators.required],
        // sub_heading: ["", Validators.required],
        // sub_heading2: ["", Validators.required],
        location: ["", Validators.required],

        // image:["", [Validators.required, required.FileType('png')]]
  
      })



      // $(document).ready(function(){
      //   $('.timepicker').timepicker();
      // });

  }


 
  // public allevents:any={
  //  title:this.myPage.controls.title,
  //  location:this.myPage.controls.location,
  //  image:this.selected
  // }


  imageUpload(event)
  {
this.selected=event[0];
  }

submit()
{
// console.log(this.allevents);
}



}

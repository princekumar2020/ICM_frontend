import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  myPage:FormGroup
  postId: string;
  List: any;
  getbyid: any;
constructor(private _userSer : UserService, private fb: FormBuilder ) {}
public Editor = ClassicEditor;


  ngOnInit() {

    this.myPage = this.fb.group(
      {
        heading: ["", Validators.required],
        sub_heading: ["", Validators.required],
        sub_heading2: ["", Validators.required],
        sub_heading3: ["", Validators.required]
  
      })



  }

}

import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  public Editor = ClassicEditor;

  myPage:FormGroup
  postId: string;
  List: any;
  getbyid: any;
constructor(private _userSer : UserService, private fb: FormBuilder ) {


}

  ngOnInit() {

    this.myPage = this.fb.group(
      {
        title: ["", Validators.required],
        discription: ["", Validators.required],
  
      })
  }


}

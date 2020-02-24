import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuMangementComponent } from './menu-mangement/menu-mangement.component';
import { ALLListComponent } from './all-list/all-list.component';
import { AddPageComponent } from './add-page/add-page.component';
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { HeadingComponent } from './heading/heading.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { SubHeading2Component } from './sub-heading2/sub-heading2.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { PreviousEventComponent } from './event/previous-event/previous-event.component';
import { UpcomingEventComponent } from './event/upcoming-event/upcoming-event.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EventRegistrationListComponent } from './event/event-registration-list/event-registration-list.component';
import { MaterialModule } from '../material/material.module';
import { UserlistComponent } from './users/userlist/userlist.component';
import { AddnewsComponent } from './news/addnews/addnews.component';
import { NewslistComponent } from './news/newslist/newslist.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { IgxGridModule } from 'igniteui-angular';

@NgModule({
  declarations: [
    AdminComponent,
    SidebarComponent,
    LoginComponent,
    DashboardComponent,
    MenuMangementComponent,
    ALLListComponent,
    AddPageComponent,
    HeadingComponent,
    SubHeadingComponent,
    SubHeading2Component,
    AddEventComponent,
    PreviousEventComponent,
    UpcomingEventComponent,
    AddUserComponent,
    EventRegistrationListComponent,
    UserlistComponent,
    AddnewsComponent,
    NewslistComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    MaterialModule,
    FroalaEditorModule,
    FroalaViewModule

  ]
})
export class AdminModule { }

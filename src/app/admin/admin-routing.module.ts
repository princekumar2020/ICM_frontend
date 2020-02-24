import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuMangementComponent } from './menu-mangement/menu-mangement.component';
import { ALLListComponent } from './all-list/all-list.component';
import { AddPageComponent } from './add-page/add-page.component';
import { HeadingComponent } from './heading/heading.component';
import { SubHeadingComponent } from './sub-heading/sub-heading.component';
import { SubHeading2Component } from './sub-heading2/sub-heading2.component';
import { AddEventComponent } from './event/add-event/add-event.component';
import { UpcomingEventComponent } from './event/upcoming-event/upcoming-event.component';
import { PreviousEventComponent } from './event/previous-event/previous-event.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EventRegistrationListComponent } from './event/event-registration-list/event-registration-list.component';
import { UserlistComponent } from './users/userlist/userlist.component';
import { AddnewsComponent } from './news/addnews/addnews.component';
import { NewslistComponent } from './news/newslist/newslist.component';


const icm_routes: Routes = [
  {
    path: '',
    component : LoginComponent
  },
  {
    path : 'dashboard',
    component : AdminComponent,
    children : [
      {
        path : '',
        component : DashboardComponent
      },
      {
        path : 'manage-menu',
        component : MenuMangementComponent,
        children :[

            {
              path: 'heading',
              component:HeadingComponent
            },

            {
              path: 'sub-heading',
              component:SubHeadingComponent
            },

            {
              path: 'sub-heading2',
              component:SubHeading2Component
            },
            

       ]



      },
      {
        path : 'page-list',
        component : ALLListComponent
      },
      {
        path : 'add-page',
        component : AddPageComponent
      },

      {
        path : 'add-event',
        component : AddEventComponent
      },

      {
        path : 'upcoming-event',
        component : UpcomingEventComponent
      },

      {
        path : 'previous-event',
        component : PreviousEventComponent
      },

      {
        path : 'register-events',
        component : EventRegistrationListComponent
      },
      {
        path : 'add-user',
        component : AddUserComponent
      },
      {
        path : 'user-list',
        component : UserlistComponent
      },
      {
        path: 'news',
        component:AddnewsComponent
      },
      {
        path: 'news-list',
        component:NewslistComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(icm_routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

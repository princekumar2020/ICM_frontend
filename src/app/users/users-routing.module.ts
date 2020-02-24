import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { AnnouncementopenComponent } from './components/announcementopen/announcementopen.component';
import { ArchivesComponent } from './components/archives/archives.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FinancialsComponent } from './components/financials/financials.component';
import { ForeignserviceComponent } from './components/foreignservice/foreignservice.component';
import { FormerchairmanComponent } from './components/formerchairman/formerchairman.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GallerydetailComponent } from './components/gallerydetail/gallerydetail.component';
import { HighcommisionersComponent } from './components/highcommisioners/highcommisioners.component';
import { OurteamComponent } from './components/ourteam/ourteam.component';
import { PdotrainingComponent } from './components/pdotraining/pdotraining.component';
import { PreviouseventsComponent } from './components/previousevents/previousevents.component';
import { ProjectComponent } from './components/project/project.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ResearchComponent } from './components/research/research.component';
import { RtiactComponent } from './components/rtiact/rtiact.component';
import { RticomplainComponent } from './components/rticomplain/rticomplain.component';
import { UpcomingeventsComponent } from './components/upcomingevents/upcomingevents.component';
import { VideogalleryComponent } from './components/videogallery/videogallery.component';


const icm_routes: Routes = [
  {
    path : '',
    component : UsersComponent,
    children : [
      {
        path : '',
        component : HomeComponent
      },

      {
        path:'aboutus',
        component:AboutusComponent

      },

      {
        path:'announcement',
        component:AnnouncementComponent

      },

      {
        path:'announcementopen',
        component:AnnouncementopenComponent

      },

      {
        path:'archive',
        component:ArchivesComponent

      },

      {
        path:'contactus',
        component:ContactusComponent

      },

      {
        path:'financials',
        component:FinancialsComponent

      },

      {
        path:'foreignservice',
        component:ForeignserviceComponent

      },

      {
        path:'formerchairman',
        component:FormerchairmanComponent

      },

      {
        path:'gallery',
        component:GalleryComponent

      },

      {
        path:'gallerydetail',
        component:GallerydetailComponent

      },

      {
        path:'highcommisioners',
        component:HighcommisionersComponent

      },

      {
        path:'ourteam',
        component:OurteamComponent

      },

      {
        path:'pdotraining',
        component:PdotrainingComponent

      },

      {
        path:'previousevents',
        component:PreviouseventsComponent

      },

      {
        path:'project',
        component:ProjectComponent

      },

      {
        path:'publications',
        component:PublicationsComponent

      },

      {
        path:'research',
        component:ResearchComponent

      },

      {
        path:'rtiact',
        component:RtiactComponent

      },

      {
        path:'rticomplain',
        component:RticomplainComponent

      },

      {
        path:'upcomingevents',
        component:UpcomingeventsComponent

      },

      {
        path:'videogallery',
        component:VideogalleryComponent

      }



    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(icm_routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

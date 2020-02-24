import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UsersRoutingModule } from './users-routing.module';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import {AnnouncementComponent} from './components/announcement/announcement.component'
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


@NgModule({
  declarations: [
    UsersComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    SidenavComponent,
    AboutusComponent,
    AnnouncementComponent,
    AnnouncementopenComponent,
    ArchivesComponent,
    ContactusComponent,
    FinancialsComponent,
    ForeignserviceComponent,
    FormerchairmanComponent,
    GalleryComponent,
    GallerydetailComponent,
    HighcommisionersComponent,
    OurteamComponent,
    PdotrainingComponent,
    PreviouseventsComponent,
    ProjectComponent,
    PublicationsComponent,
    ResearchComponent,
    RtiactComponent,
    RticomplainComponent,
    UpcomingeventsComponent,
    VideogalleryComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }

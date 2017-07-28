import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouterModule } from './app-routing.module';
import { SideBarModule } from './sideBar/sideBar.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RunTrackerService } from './services/runTracker.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule,
    AppRouterModule,
    SideBarModule
  ],
  providers: [RunTrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

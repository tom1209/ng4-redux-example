import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRouterModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RunTrackerService } from './services/runTracker.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LogRunComponent } from './log-run/log-run.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogRunComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRouterModule
  ],
  providers: [RunTrackerService],
  bootstrap: [AppComponent],
  entryComponents: [LogRunComponent]
})
export class AppModule { }

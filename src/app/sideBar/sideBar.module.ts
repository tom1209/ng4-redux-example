import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LogRunComponent } from './log-run/log-run.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    LogRunComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: []
})
export class SideBarModule { }

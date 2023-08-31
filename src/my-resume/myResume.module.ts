import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { myResumeRoutingModule } from './myResume-routing.module';
import { myResumeComponent } from './myResume.component';


@NgModule({
  declarations: [myResumeComponent],
  imports: [BrowserModule, myResumeRoutingModule],
  providers: [],
  bootstrap: [myResumeComponent],
})
export class myResumeModule {}

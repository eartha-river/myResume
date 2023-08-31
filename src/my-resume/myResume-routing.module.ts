import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { myResumeComponent } from './myResume.component';

const routes: Routes = [{ path: '', component: myResumeComponent }];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class myResumeRoutingModule {}

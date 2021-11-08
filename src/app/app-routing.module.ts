import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [

  {path:'PredictionForIssuance',component:ApplicationFormComponent},
  {path:'Home',component:HomepageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

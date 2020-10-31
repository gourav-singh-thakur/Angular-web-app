import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DetailComponent } from '../detail/detail.component';
const routes:Routes =
[    { path: '', component:DashboardComponent },
     {path:'heroes',component :HeroesComponent},
     {path:'dashboard',component :DashboardComponent},
     { path: 'detail/:id', component: DetailComponent }    ]
@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
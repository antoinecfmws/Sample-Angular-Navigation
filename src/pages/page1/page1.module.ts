import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page1Component } from './page1.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',    component: Page1Component, 
    // children:[
    //   {path:':page2',loadChildren:'../page2/page2.module#Page2Module'}  
    // ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Page1Component]
})
export class Page1Module { }

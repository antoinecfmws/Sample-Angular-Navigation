import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DashboardLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: "../dashboard/dashboard.module#DashboardModule" },
      { path: 'page1', loadChildren: "../page1/page1.module#Page1Module" },
      {
        path: 'page2', loadChildren: "../page2/page2.module#Page2Module", 
        children: [
          {path:'', loadChildren:"../page2/page2.module#Page2Module"},
          {path:'page3', loadChildren:"../page3/page3.module#Page3Module"},
        ]
      }
    ]
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardLayoutComponent]
})
export class DashboardLayoutModule { }

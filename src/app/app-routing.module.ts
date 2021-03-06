import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: "../pages/login/login.module#LoginModule" },
  { path: 'dashboard-layout', loadChildren: "../pages/dashboard-layout/dashboard-layout.module#DashboardLayoutModule" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

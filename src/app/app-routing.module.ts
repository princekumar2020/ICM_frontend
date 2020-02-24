import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const icm_routes: Routes = [
  {
    path : '',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
  },

  {
    path: 'admin',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    data: { title: 'Admin' }
  },
  {
    path : '**',
    redirectTo : '',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(icm_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

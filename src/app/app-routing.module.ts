import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'feed',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'mynetwork',
    loadChildren: () => import('./modules/my-network/my-network.module').then(m => m.MyNetworkModule),
  },
  {
    path: 'jobs',
    loadChildren: () => import('./modules/jobs/jobs.module').then(m => m.JobsModule),
  },  {
    path: 'notifications',
    loadChildren: () => import('./modules/notifications/notifications.module').then(m => m.NotificationsModule),
  },
  { path: '', redirectTo: '/feed', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

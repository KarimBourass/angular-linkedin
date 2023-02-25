import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications.component';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
  {
    path: '',
    component: NotificationsComponent,
  }
];

@NgModule({
  declarations: [
    NotificationsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class NotificationsModule { }

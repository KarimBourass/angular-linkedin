import { MyNetworkComponent } from './my-network.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MyNetworkComponent,
  }
];



@NgModule({
  declarations: [
    MyNetworkComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class MyNetworkModule { }

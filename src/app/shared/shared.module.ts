import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { ConnectionLevelComponent } from './components/connection-level/connection-level.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    HeaderComponent,
    ConnectionLevelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    CommonModule,
    HeaderComponent,
    ConnectionLevelComponent,
    InfiniteScrollModule,
  ]
})
export class SharedModule { }

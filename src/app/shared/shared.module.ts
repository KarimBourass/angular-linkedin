import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { HeaderComponent } from './layouts/header/header.component';
import { ConnectionLevelComponent } from './components/connection-level/connection-level.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { UserAvatarToggleComponent } from './layouts/user-avatar-toggle/user-avatar-toggle.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';



@NgModule({
  declarations: [
    HeaderComponent,
    ConnectionLevelComponent,
    UserAvatarToggleComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgOptimizedImage
  ],
  exports:[
    CommonModule,
    HeaderComponent,
    ConnectionLevelComponent,
    InfiniteScrollModule,

    // #Directives
    ClickOutsideDirective
  ]
})
export class SharedModule { }

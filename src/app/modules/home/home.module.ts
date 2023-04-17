import {SharedModule} from '../../shared/shared.module';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from './components/posts/posts.component';
import {StartPostComponent} from './components/start-post/start-post.component';
import {HomeUserInfoComponent} from './components/home-user-info/home-user-info.component';
import {HomeUserSuggestionComponent} from './components/home-user-suggestion/home-user-suggestion.component';
import {MatDialogModule} from "@angular/material/dialog";
import {CreatePostDialogComponent} from './dialogs/create-post-dialog/create-post-dialog.component';
import {MatDividerModule} from '@angular/material/divider';
import {NgOptimizedImage} from "@angular/common";
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];


@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
    StartPostComponent,
    HomeUserInfoComponent,
    HomeUserSuggestionComponent,
    CreatePostDialogComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatDialogModule,
    MatDividerModule,
    NgOptimizedImage,
    MatIconModule
  ]
})
export class HomeModule {
}

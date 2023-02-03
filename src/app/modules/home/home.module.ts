import { SharedModule } from '../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { StartPostComponent } from './components/start-post/start-post.component';
import { HomeUserInfoComponent } from './components/home-user-info/home-user-info.component';
import { HomeUserSuggestionComponent } from './components/home-user-suggestion/home-user-suggestion.component';

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
    HomeUserSuggestionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }

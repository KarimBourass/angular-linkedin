import { PostService } from '../../post.service';
import { Component, OnInit } from '@angular/core';
import {Post} from "../../models/home.models";

@Component({
  selector: 'home-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((data:Post[])=> this.posts = data);
  }

  onScroll() {
    this.postService.getPosts().subscribe((data:Post[])=> {this.posts = [...this.posts, ...data]})
  }

  onLikePost(post: Post) {
    post.is_liked = !post.is_liked
    if (post.is_liked)
      post.likes_count += 1
    else
      post.likes_count -= 1
  }


}

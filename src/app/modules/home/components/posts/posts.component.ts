import { PostService } from '../../post.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: any[] = []
  posts$!: Observable<any[]>

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts$ = this.postService.getPosts()
  }

  onScroll() {
    console.log("onScroll");
  }

  onLikePost(post: any) {
    post.is_liked = !post.is_liked
    if (post.is_liked)
      post.likes_count += 1
    else
      post.likes_count -= 1
  }


}

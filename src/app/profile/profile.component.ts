import { PostsService } from './services/posts-services';
import { Component, OnInit } from '@angular/core'
import { IPost } from '../shared/interfaces/post.interface';

@Component({
  selector: 'Profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public posts: Array<IPost>;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPosts();
  }

  onLouis() {}

  onEdit() {}
}

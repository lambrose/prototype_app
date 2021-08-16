import { PostsService } from '../shared/services/posts-services';
import { Component, OnInit } from '@angular/core'
import { IPost } from '../shared/interfaces/post.interface';

@Component({
  selector: 'ns-app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public posts: Array<IPost>;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.posts = this.postsService.getPostsByUsername();
  }

  onLouis() {}

  onEdit() {}
}

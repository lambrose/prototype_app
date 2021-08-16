import { Component, OnInit } from '@angular/core'
import { IPost } from '../shared/interfaces/post.interface';
import { PostsService } from './../shared/services/posts-services';

@Component({
  selector: 'ns-app-trend',
  templateUrl: './trend.component.html',
  styleUrls: ['./trend.component.scss']
})
export class TrendComponent implements OnInit {

  public trendingPosts: Array<IPost>;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    this.trendingPosts = this.postsService.getPostsByUsername();
  }

  onLouis() {}
}

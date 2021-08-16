import { DataService } from './data.service';
import { Injectable } from '@angular/core'
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {

  public constructor(private dataService: DataService) {}

  getPosts(): Array<IPost> {
    return this.dataService.getPosts();
  }

  getPostsByUsername(): Array<IPost> {
    return this.dataService.getPostsByUsername('Louis');
  }
}

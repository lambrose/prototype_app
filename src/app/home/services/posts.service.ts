import { DataService } from './../../shared/services/data.service';
import { Injectable } from '@angular/core'
import { IPost } from '../../shared/interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class HomePostsService {

  public constructor(private dataService: DataService) {}

  getPosts(): Array<IPost> {
    return this.dataService.getPosts();
  }
}

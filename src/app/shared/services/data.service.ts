import { ICoordinates } from './../interfaces/location.interface';
import { IPost } from '../interfaces/post.interface';
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private posts = new Array<IPost>(
    {
      id: 1,
      date: new Date(),
      username: 'Louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'Tourism',
      userContent: {
        description: 'Description for Post 1. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.',
        imageUrl: "/Users/louisambrose/Downloads/sunset.jpeg"
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 2,
      date: new Date(),
      username: 'Maria',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'Night Life',
      userContent: {
        description: 'Description for Post 2. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 3,
      date: new Date(),
      username: 'Katrina',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'Foodie',
      userContent: {
        description: 'Description for Post 3. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 4,
      date: new Date(),
      username: 'Louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'Politics',
      userContent: {
        description: 'Description for Post 4. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 5,
      date: new Date(),
      username: 'Jessica',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'Sports',
      userContent: {
        description: 'Description for Post 5. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 6,
      date: new Date(),
      username: 'Theresa',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'News',
      userContent: {
        description: 'Description for Post 6. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 7,
      date: new Date(),
      username: 'Joseph',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'Business',
      userContent: {
        description: 'Description for Post 7. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    }
  )

  getPosts(): Array<IPost> {
    return this.posts
  }

  getPostByID(id: number): IPost {
    return this.posts.filter((post) => post.id === id)[0];
  }

  getPostsByUsername(username: string): Array<IPost> {
    return this.posts.filter((post) => post.username === username);
  }

  // getPostsByLocation(coordinates: ICoordinates): Array<IPost> {
  //   return this.posts.filter((post) => post.username === username);
  // }
}

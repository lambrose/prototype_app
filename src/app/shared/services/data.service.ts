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
      loop: 'Chill',
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
      loop: 'Religion',
      userContent: {
        description: 'Description for Post 3. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.',
        imageUrl: "/Users/louisambrose/Downloads/sunset.jpeg"
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
      username: 'Louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 7. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 8,
      date: new Date(),
      username: 'Joseph',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 8. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 9,
      date: new Date(),
      username: 'Katrina',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 9. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 10,
      date: new Date(),
      username: 'Maria',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 10. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 11,
      date: new Date(),
      username: 'Theresa',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 11. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 12,
      date: new Date(),
      username: 'Louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 12. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 13,
      date: new Date(),
      username: 'Joseph',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 13. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 14,
      date: new Date(),
      username: 'Francis',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 14. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 15,
      date: new Date(),
      username: 'Jessica',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 15. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10,
    },
    {
      id: 16,
      date: new Date(),
      username: 'Katrina',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 16. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 17,
      date: new Date(),
      username: 'Mercy',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 17. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 18,
      date: new Date(),
      username: 'Louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 18. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 19,
      date: new Date(),
      username: 'Francis',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 19. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
      },
      likes: 123,
      isLike: true,
      comments: 10
    },
    {
      id: 20,
      date: new Date(),
      username: 'Itoro',
      location: {
        longitude: 0,
        latitude: 0
      },
      loop: 'loop Tag',
      userContent: {
        description: 'Description for Post 20. On iOS the default text of the navigation button is the title of the previous page and the back button is used explicitly for navigation.'
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

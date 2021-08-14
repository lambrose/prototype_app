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
      username: 'louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 1'
      }
    },
    {
      id: 2,
      date: new Date(),
      username: 'louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 2'
      }
    },
    {
      id: 3,
      date: new Date(),
      username: 'louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 3'
      }
    },
    {
      id: 4,
      date: new Date(),
      username: 'louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 4'
      }
    },
    {
      id: 5,
      date: new Date(),
      username: 'louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 5'
      }
    },
    {
      id: 6,
      date: new Date(),
      username: 'Post 6',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 6'
      }
    },
    {
      id: 7,
      date: new Date(),
      username: 'Post 7',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 7'
      }
    },
    {
      id: 8,
      date: new Date(),
      username: 'Post 8',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 8'
      }
    },
    {
      id: 9,
      date: new Date(),
      username: 'Post 9',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 9'
      }
    },
    {
      id: 10,
      date: new Date(),
      username: 'Post 10',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 10'
      }
    },
    {
      id: 11,
      date: new Date(),
      username: 'Post 11',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 11'
      }
    },
    {
      id: 12,
      date: new Date(),
      username: 'Post 12',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 12'
      }
    },
    {
      id: 13,
      date: new Date(),
      username: 'Post 13',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 13'
      }
    },
    {
      id: 14,
      date: new Date(),
      username: 'Post 14',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 14'
      }
    },
    {
      id: 15,
      date: new Date(),
      username: 'Post 15',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 15'
      },
    },
    {
      id: 16,
      date: new Date(),
      username: 'Post 16',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 16'
      }
    },
    {
      id: 17,
      date: new Date(),
      username: 'Post 17',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 17'
      }
    },
    {
      id: 18,
      date: new Date(),
      username: 'Post 18',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 18'
      }
    },
    {
      id: 19,
      date: new Date(),
      username: 'Post 19',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 19'
      }
    },
    {
      id: 20,
      date: new Date(),
      username: 'louis',
      location: {
        longitude: 0,
        latitude: 0
      },
      userContent: {
        description: 'Description for Post 20'
      }
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
}

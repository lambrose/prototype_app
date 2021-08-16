import { ICoordinates } from "./location.interface";

export interface IPost {
  id: number;
  date: Date;
  username: string;
  location: ICoordinates;
  loop: string;
  userContent: IPostContent;
  likes: number;
  isLike: boolean;
  comments: number;

}
// comments: Array<string>;

export interface IPostContent {
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
}



// export interface Item {
//   id: number;
//   name: string;
//   cover: string;
//   images: Array<string>;
//   category: string;
//   categoryTag: string;
//   price: string;
//   likes: number;
//   isLike: boolean;
//   isFavorite: boolean;
//   comments: number;
//   rating: string;
//   description: string;
// }

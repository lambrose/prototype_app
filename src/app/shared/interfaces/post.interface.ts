import { ICoordinates } from "./location.interface";

export interface IPost {
  id: number;
  date: Date;
  username: string;
  location: ICoordinates;
  userContent: IPostContent;
}

export interface IPostContent {
  description?: string;
  imageUrl?: string;
  videoUrl?: string;
}

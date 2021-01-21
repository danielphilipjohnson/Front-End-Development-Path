import { Comment } from './comment';

export class Post {

  id: number;
  title: string;
  body: string;
  dateCreated: Date;
  image: string;
  userId: number
  comments: Comment[];

  static getCorrectPost(posts: Post[], postIndex: string): Post {

    return posts[postIndex];
  }

  static getComments(post: Post): Comment[] {
    return post.comments;
  }

}
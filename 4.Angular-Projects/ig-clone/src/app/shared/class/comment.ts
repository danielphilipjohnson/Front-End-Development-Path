import { CommentForm } from './commentForm';

export class Comment {

    id: number;
    photoId: number;
    userId: number;
    body: string;
    username: string;
    avatar: string;
    postId: number;
    
    /**
     *
     */
    constructor(postId: number, commentFormValues: CommentForm) {
        this.photoId = 122;
        this.userId =  45;
        this.body =  commentFormValues.body;
        this.username = 'vputtan18';
        this.avatar =  'https://robohash.org/suscipitmodiconsequatur.png?size=50x50&set=set1';;
        this.postId=  postId;
    }
}

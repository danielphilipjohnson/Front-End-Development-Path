import { Gender } from '../enum/gender.enum'

export class User {

    id: number;
    firstName: string;
    lastName: string;
    title: string;
    race: string;
    language: string;
    gender: Gender;
    caption: string;
    avatar: string;
    dob: Date;
    state: string;
    email: string;
    username: string;
    following: number;
    followers: number;
    
}

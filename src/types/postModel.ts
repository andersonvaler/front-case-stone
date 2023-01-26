import { TextModel } from './textModel';

export interface Post {
    id: number;
    createdDate: string;
    postPic: string;
    createdByUserId: number;
    hashtags: number[];
    likes: number;
    texts?: TextModel[];
}

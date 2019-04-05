import { Post } from '../models/post';
export interface FeedState {
    loading: boolean;
    posts: Post[];
    formStatus: string;

    totalPosts: number;
}
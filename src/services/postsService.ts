import { Filter, Post } from '../types';
import { getApiUrl } from '../helpers';
import axios, { AxiosResponse } from 'axios';

export const PostsService = {
    async getPosts(filters?: Filter[]): Promise<AxiosResponse<Post[]>> {
        const apiUrl = getApiUrl('posts', filters);
        return axios.get<Post[]>(apiUrl);
    },

    async updatePost(postId: number, data: { [Key in keyof Post]?: Post[Key] }): Promise<AxiosResponse<Post>> {
        const apiUrl = getApiUrl('posts') + `/${postId}`;
        return axios.patch<Post>(apiUrl, data);
    },
};

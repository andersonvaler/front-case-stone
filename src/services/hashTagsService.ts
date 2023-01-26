import { Filter, Hashtag } from '../types';
import { getApiUrl } from '../helpers';
import axios, { AxiosResponse } from 'axios';

export const HashtagsService = {
    async getHashtags(filters?: Filter[]): Promise<AxiosResponse<Hashtag[]>> {
        const apiUrl = getApiUrl('hashtags', filters);
        return axios.get<Hashtag[]>(apiUrl);
    },
};

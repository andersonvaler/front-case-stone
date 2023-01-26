import { Filter, User } from '../types';
import { getApiUrl } from '../helpers';
import axios, { AxiosResponse } from 'axios';
import { useUsers } from '../providers/Users';

export const UserService = {
    async getUsers(filters?: Filter[]): Promise<AxiosResponse<User[]>> {
        const apiUrl = getApiUrl('users', filters);
        return axios.get<User[]>(apiUrl);
    },

    async getCurrentUserId(): Promise<string> {
        const apiUrl = getApiUrl('me');
        const userIdResponse = await axios.get<{ userId: number }>(apiUrl);
        return userIdResponse.data.userId.toString();
    },

    async getCurrentUser(): Promise<User> {
        const userId = await this.getCurrentUserId();
        const userDataResponse = await this.getUsers([{ name: 'id', value: userId }]);
        const userData = userDataResponse.data[0];
        return userData;
    },
};

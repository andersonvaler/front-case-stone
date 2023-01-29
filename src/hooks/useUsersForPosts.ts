import { useEffect } from 'react';
import { useAppState } from '../providers/AppState';
import { useAuthUser } from '../providers/AuthUser';
import { useUsers } from '../providers/Users';
import { UserService } from '../services';
import { AppStateEnum } from '../types';

export const useUsersForPosts = (userIds: number[]) => {
    const { users, setUsers } = useUsers();
    const { authUser } = useAuthUser();
    const { setAppState } = useAppState();

    useEffect(() => {
        if (authUser) {
            const ids = userIds.filter(id => id !== authUser.id);
            const requests = ids.map(id => UserService.getUsers([{ name: 'id', value: id.toString() }]));
            Promise.all(requests)
                .then(responses => {
                    const users = responses.map(response => response.data[0]);
                    users.push(authUser);
                    setUsers(users);
                    setAppState(AppStateEnum.LOADED);
                })
                .catch(error => {
                    console.error(error);
                    setAppState(AppStateEnum.ERROR);
                });
        }
    }, [userIds, setUsers, authUser, setAppState]);

    return users;
};

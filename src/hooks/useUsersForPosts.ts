import { useEffect } from 'react';
import { useAuthUser } from '../providers/AuthUser';
import { useUsers } from '../providers/Users';
import { UserService } from '../services';

export const useUsersForPosts = (userIds: number[]) => {
    const { users, setUsers } = useUsers();
    const { authUser } = useAuthUser();

    useEffect(() => {
        if (authUser) {
            const ids = userIds.filter(id => id !== authUser.id);
            console.log(authUser);
            const requests = ids.map(id => UserService.getUsers([{ name: 'id', value: id.toString() }]));
            Promise.all(requests)
                .then(responses => {
                    const users = responses.map(response => response.data[0]);
                    users.push(authUser);
                    setUsers(users);
                })
                .catch(error => console.log(error));
        }
    }, [userIds, setUsers, authUser]);

    return users;
};

import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { User } from '../types';

interface UsersContextProps {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

interface IProps {
    children: ReactNode;
}

const UsersContext = createContext<UsersContextProps>({ users: [], setUsers: () => {} });

export const UsersProvider: React.FC<IProps> = ({ children }) => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        console.log(users);
    }, [users]);

    return <UsersContext.Provider value={{ users, setUsers }}>{children}</UsersContext.Provider>;
};

export const useUsers = () => useContext(UsersContext);

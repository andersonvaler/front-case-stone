import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { UserService } from '../services';
import { User } from '../types';

interface AuthUserContextProps {
    authUser: User | null;
    setAuthUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface IProps {
    children: ReactNode;
}

const AuthUserContext = createContext<AuthUserContextProps>({ authUser: null, setAuthUser: () => {} });

export const AuthUserProvider: React.FC<IProps> = ({ children }) => {
    const [authUser, setAuthUser] = useState<User | null>(null);

    useMemo(() => {
        UserService.getCurrentUser().then(user => {
            setAuthUser(user);
        });
    }, []);

    const value = useMemo(
        () => ({
            authUser,
            setAuthUser,
        }),
        [authUser],
    );

    return <AuthUserContext.Provider value={value}>{children}</AuthUserContext.Provider>;
};

export const useAuthUser = () => useContext(AuthUserContext);

import React, { ReactNode } from 'react';
import { AppStateProvider } from './AppState';
import { AuthUserProvider } from './AuthUser';
import { HashtagsProvider } from './Hashtags';
import { PostsProvider } from './Posts';
import { UsersProvider } from './Users';

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AppStateProvider>
            <AuthUserProvider>
                <PostsProvider>
                    <UsersProvider>
                        <HashtagsProvider>{children}</HashtagsProvider>
                    </UsersProvider>
                </PostsProvider>
            </AuthUserProvider>
        </AppStateProvider>
    );
};

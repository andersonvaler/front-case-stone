import React, { ReactNode } from 'react';
import { AuthUserProvider } from './AuthUser';
import { HashtagsProvider } from './Hashtags';
import { PostsProvider } from './Posts';
import { UsersProvider } from './Users';

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <AuthUserProvider>
            <PostsProvider>
                <UsersProvider>
                    <HashtagsProvider>{children}</HashtagsProvider>
                </UsersProvider>
            </PostsProvider>
        </AuthUserProvider>
    );
};

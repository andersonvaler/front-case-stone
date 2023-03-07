import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { Post } from '../types';

interface PostsContextProps {
    posts: Post[];
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
}

interface IProps {
    children: ReactNode;
}

const PostsContext = createContext<PostsContextProps>({ posts: [], setPosts: () => {} });

export const PostsProvider: React.FC<IProps> = ({ children }) => {
    const [posts, setPosts] = useState<Post[]>([]);

    const value = useMemo(
        () => ({
            posts,
            setPosts,
        }),
        [posts],
    );

    return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export const usePosts = () => useContext(PostsContext);

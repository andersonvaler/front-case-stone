import { createContext, ReactNode, useContext, useState } from 'react';
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

    return <PostsContext.Provider value={{ posts, setPosts }}>{children}</PostsContext.Provider>;
};

export const usePosts = () => useContext(PostsContext);

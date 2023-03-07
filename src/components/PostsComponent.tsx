import React, { useEffect, useState } from 'react';
import { PostsService } from '../services';
import { useUsersForPosts } from '../hooks';
import { usePosts } from '../providers/Posts';
import { PostComponent } from './PostComponent';
import { useAppState } from '../providers/AppState';
import { AppStateEnum } from '../types';

export const PostsComponent: React.FC = (): JSX.Element => {
    const [userIds, setUserIds] = useState<number[]>([]);
    const { posts, setPosts } = usePosts();
    const { setAppState } = useAppState();
    useUsersForPosts(userIds);

    useEffect(() => {
        setAppState(AppStateEnum.LOADING);
        PostsService.getPosts([
            { name: '_sort', value: 'createdDate' },
            { name: '_order', value: 'desc' },
            { name: '_embed', value: 'texts' },
        ])
            .then(response => {
                setPosts(response.data);
                let ids = Array.from(new Set(response.data.map(post => post.createdByUserId)));
                setUserIds(ids);
            })
            .catch(error => {
                setAppState(AppStateEnum.ERROR);
                console.error(error);
            });
    }, [setPosts, setAppState]);

    return (
        <div className=" text-md text-gray-800 p-5 sm:p-10 lg:w-11/12 xl:w-9/12 2xl:w-8/12">
            {posts.map(post => {
                return (
                    <div key={post.id} className="mb-10">
                        <PostComponent postData={post} />
                    </div>
                );
            })}
        </div>
    );
};

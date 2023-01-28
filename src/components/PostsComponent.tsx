import React, { useEffect, useState } from 'react';
import { PostsService } from '../services';
import { useUsersForPosts } from '../hooks';
import { usePosts } from '../providers/Posts';
import { PostComponent } from './PostComponent';

export const PostsComponent: React.FC = (): JSX.Element => {
    const [userIds, setUserIds] = useState<number[]>([]);
    const { posts, setPosts } = usePosts();
    useUsersForPosts(userIds);

    useEffect(() => {
        PostsService.getPosts([
            { name: '_sort', value: 'createdDate' },
            { name: '_order', value: 'desc' },
            { name: '_embed', value: 'texts' },
        ]).then(response => {
            setPosts(response.data);
            let ids = Array.from(new Set(response.data.map(post => post.createdByUserId)));
            setUserIds(ids);
        });
    }, [setPosts]);

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

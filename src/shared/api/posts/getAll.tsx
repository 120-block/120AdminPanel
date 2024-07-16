import React from 'react';
import axios from 'axios';
import PostCard from "@/widgets/PostCard/ui/postCard";
import {PostsProps} from './types';

interface postCardProps {
    key: number;
    user: string;
    usersAvatar: string;
    postsAwardInBP: number;
    postsDescription: string;
    postsImage: string;
}

const Posts: React.FC<PostsProps> = ({posts, error}) => {
    if (error) {
        return <div>{error}</div>;
    }

    if (!posts) {
        return <div>Loading...</div>;
    }

    return (
        <>
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    user={`${post.username}`}
                    usersAvatar={post.profile_photo}
                    postsAwardInBP={5341}
                    postsDescription={post.description}
                    postsImage={post.image}
                />
            ))}
        </>
    );
};

export async function fetchPosts() {
    try {
        const response = await axios.get(`${process.env.API_PATH}/post/get_all`);
        return {
            posts: response.data,
            error: null
        };
    } catch (error) {
        console.error(error);
        return {
            posts: null,
            error: 'Error fetching posts data'
        };
    }
}

export default Posts;

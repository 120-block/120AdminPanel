export interface Post {
    post_id: number;
    id: number;
    user_id: number;
    control: boolean;
    check: boolean;
    balance_sheet_id: string;
    tag_id: string;
    link: string;
    time_creation: string;
    image: string;
    description: string;
    username: string;
    profile_photo: string;
}

export interface PostsProps {
    posts: Post[] | null;
    error: string | null;
}

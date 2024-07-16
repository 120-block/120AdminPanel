import Accept from "@/shared/api/buttons/Accept";
import Reject from "@/shared/api/buttons/Reject";
import React, {useState} from 'react';
import axios from "axios";
import {useRouter} from "next/router";

type postCardProps = {
    post_id: number;
    user: string;
    usersAvatar?: string;
    postsDescription: string;
    postsImage: string;
    control: boolean;
    check: boolean;
};

const PostCard = ({
                      post_id,
                      user,
                      usersAvatar,
                      postsDescription,
                      postsImage,
                      control: propControl,
                      check: propCheck
                  }: postCardProps) => {
    const router = useRouter();
    const [localCheck, setLocalCheck] = useState(propCheck);
    const [localControl, setLocalControl] = useState(propControl);

    const handleReject = async () => {
        setLocalCheck(true);

        // const postData = {
        //     post_id: post_id,
        //     check: true,
        // };
        console.log('post_id:', post_id, 'check:', localCheck)
        try {
            const response = await axios.post('https://120-server.vercel.app/api/post/update', {
                post_id: post_id,
                check: localCheck
            });
            console.log('Post updated successfully');
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    // const handleAccept = async () => {
    //     setLocalCheck(true);
    //     setLocalControl(true);
    //
    //     const postData = {
    //         check: true,
    //         control: true,
    //     };
    //
    //     try {
    //         const response = await axios.post('https://95.163.231.244:3000/api/post/update', {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify(postData),
    //         });
    //
    //         if (!response) {
    //             throw new Error('Failed to update the post');
    //         }
    //
    //         console.log('Post updated successfully');
    //     } catch (error) {
    //         console.error('Error updating post:', error);
    //     }
    // };


    return (
        <div className="max-w-[389px] w-full rounded-[14px] bg-white flex flex-col gap-y-0.5">
            <div className="inline-flex items-center gap-x-1.5 py-1 pl-1">
                <img
                    src={usersAvatar}
                    className="size-[38px] rounded-full"
                />
                <div className="flex flex-col">
                    <p className="text-secondarybody text-black">{user}</p>
                    <p className="text-[12px] tracking-[-0.02em] text-app_gray_light-300">
                        {postsDescription}
                    </p>
                </div>
                <div className="ml-auto pr-[12px]">
                    {/*<button className="mr-2 text-green-500" onClick={handleAccept}>*/}
                    {/*    accept*/}
                    {/*</button>*/}
                    <button className="text-red-500" onClick={handleReject}>
                        reject
                    </button>
                </div>
            </div>
            <img
                src={postsImage}
                className="w-full aspect-square rounded-b-[14px]"
            />
        </div>
    );
};

export default PostCard;

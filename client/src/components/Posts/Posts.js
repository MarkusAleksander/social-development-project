import React from "react";

import Post from "./Post/Post";

const Posts = (props) => (
    <ul className="space-y-4">
        {
            props.posts.map((post) => {
                return <Post key={post.post_id} content={post.content} />
            })
        }
    </ul>
);

export default Posts;
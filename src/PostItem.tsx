import React, { FC } from "react";
import { Itime } from "./components/Date";
import { Time } from "./components/Time";
import PostList from "./PostList";

interface PostItemProps {
  post: any;
  index: string | number;
  comment: any[];
  id: number;
  timing: Itime;
}

const PostItem: FC<PostItemProps> = ({ comment, post, index, id, timing }) => {
  return (
    <div>
      {comment.map((post, index) => (
        <PostList
          number={index + 1}
          post={post}
          key={post.id}
          props={""}
          title={0}
          body={""}
          timing={Time[0]}
          index={""}
        />
      ))}
    </div>
  );
};

export default PostItem;

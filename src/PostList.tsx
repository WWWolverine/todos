import React, { FC } from "react";
import "./App.css";
import { Itime } from "./components/Date";

interface PostListProps {
  props: number | string;
  number: number;
  post: any;
  title: number;
  body: string;
  timing: Itime;

  index: string | number;
}

const PostList: FC<PostListProps> = ({ number, post, body, title, timing }) => {
  return (
    <div className="post">
      <div className="post__content">
        {" "}
        <div className="PostName">{post.title}</div>
        <div className="PostNumber">
          <h1>Запись №{number}</h1>
        </div>
        <div className="PostBody">{post.body}</div>
        <div className="PostTime">
          <h2>{timing.datetime}</h2>
        </div>
      </div>
    </div>
  );
};

export default PostList;

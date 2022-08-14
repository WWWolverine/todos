import React, { useState } from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import { Itime } from "../components/Date";
import Pagination from "../components/Pagination";
import { Time } from "../components/Time";
import PostItem from "../PostItem";

interface StateProperties {
  id: number;
  title: string;
  body: string;
  time: Itime | string;
}

const Page1 = () => {
  const [comment, setComment] = useState<StateProperties[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [time, setTime] = useState("");
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [commentPerPage] = useState(3);
  const addNewComment = (e: any) => {
    e.preventDefault();
    function increment() {
      setCount(count + 1);
    }
    increment();
    const newComment = {
      id: Date.now(),
      title,
      body,
      time,
    };
    setComment([...comment, newComment]);
    setTitle("");
    setBody("");
    setTime("");
  };

  const lastCommentIndex = currentPage * commentPerPage;
  const firstCommentIndex = lastCommentIndex - commentPerPage;
  const currentComment = comment.slice(firstCommentIndex, lastCommentIndex);

  const paginate = (pageNumber: React.SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  return (
    <>
      <div className="root">
        <div className="App-center">
          <div className="App">
            {" "}
            <h3>Количество записей : {count}</h3>
            <div className="Comments">
              <form name="contact" method="POST" data-netlify="true" id="form1">
                <button
                  className="MyBtn"
                  onClick={addNewComment}
                  disabled={!title || !body}
                >
                  Создать
                </button>
                <input
                  className="MyInput"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Запись"
                />
                <input
                  maxLength={100}
                  className="MyInput1"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  type="text"
                  placeholder="Подпись"
                />
                <select
                  className="MySelect"
                  onChange={(e) => setTime(e.target.value)}
                >
                  <option value={time}>America/Punta_Arenas</option>
                  <option value={time}>Asia/Almaty</option>
                </select>
              </form>
            </div>
            <form id="form2">
              <PostItem
                timing={Time[0]}
                comment={comment}
                post={null}
                index={""}
                id={0}
              />
            </form>
          </div>{" "}
          <Pagination
            commentPerPage={commentPerPage}
            totalComment={comment.length}
            paginate={paginate}
          />
        </div>{" "}
      </div>
    </>
  );
};

export default Page1;

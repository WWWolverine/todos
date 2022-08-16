import axios from "axios";
import React, { useEffect, useState } from "react";
import { Itime } from "./components/Date";
import Pagination from "./components/Pagination";
import { Time } from "./components/Time";
import PostItem from "./PostItem";

interface StateProperties {
  id: number;
  title: string;
  body: string;
  time: Itime | string;
}

const App = () => {
  const [comment, setComment] = useState<StateProperties[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [time, setTime] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [commentPerPage] = useState(4);

  const handleClick = () => console.log("click");

  useEffect(() => {
    const raw = localStorage.getItem("comment")!;

    setComment(JSON.parse(raw));
  }, []);

  useEffect(() => {
    localStorage.setItem("comment", JSON.stringify(comment));

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [comment]);

  const addNewComment = (e: any) => {
    e.preventDefault();

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
  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setCurrentPage((prev) => prev - 1);
  };
  const lastCommentIndex = currentPage * commentPerPage;
  const firstCommentIndex = lastCommentIndex - commentPerPage;
  const currentComment = comment.slice(firstCommentIndex, lastCommentIndex);
  const paginate = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="root">
        <div className="App-center">
          <div className="App">
            {" "}
            <button className="prev" onClick={prevPage}>
              Предыдущая страница{" "}
            </button>{" "}
            <button className="next" onClick={nextPage}>
              Следующая страница{" "}
            </button>
            <Pagination
              commentPerPage={commentPerPage}
              totalComment={comment.length}
              paginate={paginate}
            />
            <div className="Comments">
              <form
                className=".add-items-form"
                name=".add-items-form"
                method="POST"
                data-netlify="true"
                id=".add-items-form"
              >
                <button
                  className="MyBtn"
                  onClick={addNewComment}
                  disabled={!title || !body}
                >
                  Создать
                </button>
                <input
                  name="item"
                  className="MyInput"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  type="sumbit"
                  placeholder="Запись"
                />
                <input
                  name="item"
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
                </select>
              </form>
            </div>
            <form name="form2" className="form2" id="form2">
              <PostItem
                timing={Time[0]}
                comment={currentComment}
                post={null}
                index={""}
                id={0}
              />
            </form>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default App;

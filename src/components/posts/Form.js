import "./Post.css";
import axios from "axios";
import { useState } from "react";

export const Form = () => {
  const [commentInput, setCommentInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };
  const changeContentHandler = (event) => {
    setCommentInput(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();
    setCommentInput("");
    setName("");
    setEmail("");

    axios
      .post("https://jsonplaceholder.typicode.com/posts/23/comments", {
        name: name,
        email: email,
        content: commentInput,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="formContainer">
      <form className="form">
        <div className="inputContainer">
          <input
            className="input"
            type="text"
            id="title"
            placeholder="Вашe Имя"
            value={name}
            onChange={changeNameHandler}
          />
          <input
            className="input"
            type="text"
            id="title"
            placeholder="Ваш Еmail"
            value={email}
            onChange={changeEmailHandler}
          />
        </div>
        <textarea
          className="textarea"
          type="text"
          id="title"
          placeholder="Ваш комметарий....."
          value={commentInput}
          onChange={changeContentHandler}
        />
        <button
          className="postButton"
          onClick={(event) => addComment(event)}
          disabled={!commentInput || !name || !email}
        >
          <p className="buttonp">Отправить</p>
        </button>
      </form>
    </div>
  );
};

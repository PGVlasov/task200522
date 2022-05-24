import { useState } from "react";
import axios from "axios";
import "./Post.css";
import { useNavigate, useParams } from "react-router";

export const Form = () => {
  const [commentInput, setCommentInput] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState(false);

  const navigate = useNavigate("");

  const validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const param = useParams();

  const postId = parseInt(param.postId, 10);
  const userId = parseInt(param.userId, 10);

  const changeNameHandler = (event) => {
    setName(event.target.value);
  };
  const changeEmailHandler = (event) => {
    if (validateEmail(email)) {
      setValidate(true);
    }
    setEmail(event.target.value);
  };
  const changeContentHandler = (event) => {
    setCommentInput(event.target.value);
  };

  const addComment = () => {
    setCommentInput("");
    setName("");
    setEmail("");

    axios
      .post(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
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
    navigate(`/users/${userId}/posts/${postId}`);
  };

  return (
    <div className="formContainer">
      <form className="form">
        <div className="inputContainer">
          <input
            className={"input"}
            type="text"
            id="title"
            placeholder="Вашe Имя"
            value={name}
            onChange={changeNameHandler}
          />
          <input
            type="email"
            className={validate ? "input" : "input-wrong"}
            id="title"
            placeholder="Ваш Еmail"
            value={email}
            onChange={changeEmailHandler}
          />
          <label>{!validate ? <p>введите корректный email</p> : <p></p>}</label>
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
          className={
            !commentInput || !name || !email || !validate
              ? "postButton-disabled"
              : "postButton"
          }
          onClick={(event) => addComment(event)}
          disabled={!commentInput || !name || !email || !validate}
        >
          <p className="buttonp">Отправить</p>
        </button>
      </form>
    </div>
  );
};

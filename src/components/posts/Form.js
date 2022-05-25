import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import classes from "./Post.module.css";

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
    setValidate(false);

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
    <div className={classes["form-container"]}>
      <form className={classes["form"]}>
        <div className={classes["input-container"]}>
          <input
            className={classes["input"]}
            type="text"
            id="title"
            placeholder="Вашe Имя"
            value={name}
            onChange={changeNameHandler}
          />
          <input
            type="email"
            className={validate ? classes["input"] : classes["input-wrong"]}
            id="title"
            placeholder="Ваш Еmail"
            value={email}
            onChange={changeEmailHandler}
          />
          <label>
            {!validate ? (
              <span className={classes["validate"]}>
                введите корректный email
              </span>
            ) : (
              <p></p>
            )}
          </label>
        </div>
        <textarea
          className={classes["textarea"]}
          type="text"
          id="title"
          placeholder="Ваш комметарий....."
          value={commentInput}
          onChange={changeContentHandler}
        />
        <button
          className={
            !commentInput || !name || !email || !validate
              ? classes["post-button-disabled"]
              : classes["post-button"]
          }
          onClick={(event) => addComment(event)}
          disabled={!commentInput || !name || !email || !validate}
        >
          <span className={classes["post-button-text"]}>Отправить</span>
        </button>
      </form>
    </div>
  );
};

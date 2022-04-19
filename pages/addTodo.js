import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

function addtodo() {
  // console.log(match.params.id);
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  useEffect(() => {
    //  if()
  });

  // setters
  const titlesetter = (e) => {
    settitle(e.target.value);
  };
  const bodySetter = (e) => {
    setbody(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    let data = {
      title: title,
      body: body,
    };
    axios
      .post("http://localhost:3000/api/test", data)
      .then(() => {
        alert("added successfully!!!");
      })
      .catch((err) => {
        alert(err);
      });
    console.log(data);
  };

  return (
    <div className="container">
      <div className={styles.centerContent}>
        <h1>Add Data</h1>
        <br />
        <a href="/home">Home</a>
        <br /> <br />
        <form id="form">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="Title"
              className={styles.formControl}
              onChange={titlesetter}
            />
          </div>
          <label htmlFor="Listitems" className="form-label">
            List
          </label>
          <input
            type="text"
            id="ListTODO"
            className={styles.formControl}
            onChange={bodySetter}
          />
          <button id="add" class="btn btn-primary" onClick={submit}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
export default addtodo;

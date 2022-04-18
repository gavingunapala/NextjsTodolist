import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles.module.css";

import React, { useState, useEffect } from "react";
function addtodo() {
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

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
    console.log(data);
  };

  return (
    <div className="container">
      <div className={styles.centerContent}>
        <h1>Add Data</h1>
        <br />
        <a href="/home">add data</a>
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
          <button id="add" onClick={submit}>
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
export default addtodo;

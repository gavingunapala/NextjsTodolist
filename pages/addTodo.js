import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles.module.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Navbar from "../components/GetData/navbar";
import { useRouter } from "next/router";

function addtodo() {
  const router = useRouter();

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
        router.push("/");
      })

      .catch((err) => {
        alert(err);
      });
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={styles.centermain}>
          <br />
          <a href="/home" class="btn btn-primary">
            Home
          </a>
          <br /> <br />
          <form id="form" className={styles.center}>
            <h1>Add Data</h1>
            <br />
            <div className="form-group">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="Title"
                className="form-control"
                onChange={titlesetter}
              />
            </div>
            <label htmlFor="Listitems" className="form-label">
              List
            </label>
            <input
              type="text"
              id="ListTODO"
              className="form-control"
              onChange={bodySetter}
            />
            <br />
            <button id="add" class="btn btn-primary" onClick={submit}>
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default addtodo;

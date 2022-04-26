import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/GetData/navbar";
import styles from "../../styles.module.css";

function edit() {
  const router = useRouter();
  let id = router.query.id;
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [date, setdate] = useState("");

  useEffect(() => {
    console.log(id);
    if (id) {
      function getalldata() {
        axios
          .get(`/api/${id}`)
          .then((res) => {
            settitle(res.data.data.title);
            setbody(res.data.data.body);
            setdate(res.data.data.todaydate);
          })
          .catch((err) => {});
      }

      getalldata();
    }
  }, [id]);

  console.log(title);
  // setters
  const titlesetter = (e) => {
    settitle(e.target.value);
  };
  const bodySetter = (e) => {
    setbody(e.target.value);
  };
  const dateSetter = (e) => {
    setdate(e.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    let data = {
      title: title,
      body: body,
    };
    axios
      .put(`/api/${id}`, data)
      .then(() => {
        alert("updated successfully!!!");
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
          <a href="/home" className="btn btn-primary">
            Home
          </a>
          <br /> <br />
          <form id="form" className={styles.center}>
            <h1>Update Data</h1>
            <br />
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                id="Title"
                value={title}
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
              value={body}
              className="form-control"
              onChange={bodySetter}
            />
            <br />
            <label htmlFor="Listitems" className="form-label">
              created date
            </label>
            <input
              type="text"
              id="ListTODO"
              value={date}
              className="form-control"
              readOnly="TRUE"
            />
            <br />
            <button id="add" className="btn btn-primary" onClick={submit}>
              Update
            </button>
            <br />
          </form>
        </div>
      </div>
    </div>
  );
}
export default edit;

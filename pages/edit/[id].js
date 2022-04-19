import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRouter } from "next/router";

function edit() {
  let router = useRouter();
  let id = router.query.id;
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");

  useEffect(() => {
    if (id) {
      function getalldata() {
        axios
          .get(`http://localhost:3000/api/${id}`)
          .then((res) => {
            settitle(res.data.data.title);
            setbody(res.data.data.body);
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
  const submit = (e) => {
    e.preventDefault();
    let data = {
      title: title,
      body: body,
    };
    axios
      .put(`http://localhost:3000/api/${id}`, data)
      .then(() => {
        alert("updated successfully!!!");
      })
      .catch((err) => {
        alert(err);
      });
    console.log(data);
  };

  return (
    <div className="container">
      <div>
        <h1>Update Data</h1>
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
              value={title}
              // className={styles.formControl}
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
            // className={styles.formControl}
            onChange={bodySetter}
          />
          <button id="add" className="btn btn-primary" onClick={submit}>
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
export default edit;

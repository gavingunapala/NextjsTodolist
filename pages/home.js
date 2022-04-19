import Getdata from "../components/GetData";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

function home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    function getalldata() {
      axios
        .get("http://localhost:3000/api/test")
        .then((res) => {
          setdata(res.data.data);
          console.log(res.data.data);
        })
        .catch((err) => {});
    }
    getalldata();
  }, []);

  //delete data from data base
  const deleteData = (id) => {
    console.log(id);
    axios.delete(`http://localhost:3000/api/${id}`);
  };

  return (
    <div className="container">
      <h1>Home Page</h1>
      {/* {JSON.stringify(data, null, 2)} */}
      <a href="/addTodo">add data</a>
      <br />
      {/* loop content */}
      <div>
        {data?.map((onedata, key) => (
          <div key={onedata._id}>
            <Getdata title={onedata.title} body={onedata.body} />
            <a
              type="button"
              className="btn btn-success"
              href={`/edit/${encodeURIComponent(onedata._id)}`}
            >
              edit
            </a>
            <a
              type="button"
              className="btn btn-danger"
              onClick={() => {
                if (window.confirm("Are you sure you want to delete this?")) {
                  deleteData(onedata._id);
                }
              }}
            >
              delete
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default home;

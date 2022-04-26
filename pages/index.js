import Getdata from "../components/GetData";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/GetData/navbar";
import styles from "../styles.module.css";

function home() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    function getalldata() {
      axios
        .get("https:/cors-anywhere.herokuapp.com/api/test")
        .then((res) => {
          setdata(res.data.data.reverse());
        })
        .catch((err) => {});
    }
    getalldata();
  }, [data]);

  //delete data from data base
  const deleteData = (id) => {
    console.log(id);
    axios.delete(`/api/${id}`);
  };

  return (
    <div>
      <Navbar />
      <br />

      {/* {JSON.stringify(data, null, 2)} */}
      <div className={styles.rightbutton}>
        <a href="/addTodo" className="btn btn-primary">
          add data
        </a>
      </div>
      <br />
      <br />
      {/* loop content */}
      <div className="container ">
        {data?.map((onedata, key) => (
          <div key={onedata._id}>
            <Getdata
              title={onedata.title}
              body={onedata.body}
              date={onedata.todaydate}
            />
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
            <br /> <br />
          </div>
        ))}
      </div>
    </div>
  );
}
export default home;

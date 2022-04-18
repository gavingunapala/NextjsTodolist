import Getdata from "../components/GetData";
import React, { useState, useEffect } from "react";
import axios from "axios";

function home() {
  const [title, setTitle] = useState("ss");
  const [disc, setDesc] = useState("ssddd");
  const [data, setdata] = useState([]);
  useEffect(() => {
    function getalldata() {
      xxx;
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
          setdata(res.data);
          console.log(res.data);
        })
        .catch((err) => {});
    }

    getalldata();

    // console.log(title, disc);
    // let data = {
    //   title: title,
    //   body: disc,
    // };
    // setdata(data);
  }, []);

  return (
    <div className="container">
      <h1>Home Page</h1>
      {/* {JSON.stringify(data, null, 2)} */}
      <a href="/addTodo">add data</a>
      <br />
      {/* loop content */}
      <div>
        {data?.map((onedata, key) => (
          <div key={onedata.id}>
            <Getdata title={onedata.title} body={onedata.body} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default home;

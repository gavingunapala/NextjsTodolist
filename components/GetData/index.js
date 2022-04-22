import react from "react";
const Post = (props) => {
  return (
    <div className="card">
      <h2 className="card">Title : {props.title}</h2>
      <div className="card">
        <h5>date</h5>
        <p>{props.date}</p>
        <h5>Discription</h5>
        <p>{props.body}</p>
      </div>
    </div>
  );
};
export default Post;

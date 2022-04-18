import react from "react";
const Post = (props) => {
  return (
    <div className="container">
      <h2>{props.title}</h2>
      <p>{props.body}</p>
    </div>
  );
};
export default Post;

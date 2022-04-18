import Head from "next/head";
import Getdata from "../components/GetData";

export default function Home() {
  return (
    <div className="container">
      <h1>Title</h1>
      <div>
        <Getdata />
      </div>
    </div>
  );
}

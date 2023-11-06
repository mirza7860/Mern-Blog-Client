import React, { useState } from "react";
import ReactQuill from "react-quill";
import  {Navigate} from "react-router-dom"
import "react-quill/dist/quill.snow.css";
import "./CreatePost.css";
const CreatePost = () => {
  const [title, settitle] = useState("");
  const [summary, setsummary] = useState("");
  const [content, setcontent] = useState("");
  const [file, setfile] = useState(null);
  const [redirect, setredirect] = useState(false);
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],

      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],

      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],

      ["clean"],
      ["link", "image"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const CreateNewPost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", file);
    console.log(data);
    const response = await fetch(
      "https://blog-app-9ql4x.ondigitalocean.app/post",
      {
        method: "POST",
        body: data,
        credentials: "include",
      }
    );
    if(response.ok){
      setredirect(true);
    }
  };
  if(redirect){
    return(<Navigate to="/"/>)
  }
  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => settitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Summary"
        value={summary}
        onChange={(e) => setsummary(e.target.value)}
      />
      <input
        type="file"
        placeholder="File"
        onChange={(e) => setfile(e.target.files[0])}
        required="required"
      />
      <div className="Quill">
        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          onChange={(newValue) => {
            setcontent(newValue);
          }}
        />
      </div>
      <button onClick={CreateNewPost}>Cretepost</button>
    </form>
  );
};

export default CreatePost;

import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import Editor from "../../Components/Editor/Editor";
const EditPost = () => {
  const { id } = useParams();
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
  useEffect(() => {
    fetch("https://3.110.156.197:8000/post/" + id).then(
      (response) => {
        response.json().then((postInfo) => {
          settitle(postInfo.title);
          setcontent(postInfo.content);
          setsummary(postInfo.summary);
        });
      }
    );
  }, []);
  async function updatePost(e) {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("id", id);
    if (file) {
      data.set("file", file);
    }
    const response = await fetch(
      "http://3.110.156.197:8000/post",
      {
        method: "PUT",
        body: data,
        credentials: "include",
      }
    );
    if (response.ok) {
      setredirect(true);
    }
  }

  if (redirect) {
    return <Navigate to={"/post/" + id} />;
  }
  return (
    <form onSubmit={updatePost}>
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
      <Editor
        onChange={setcontent}
        value={content}
        modules={modules}
        formats={formats}
      />
      <button style={{ marginTop: "5px" }}>Update post</button>
    </form>
  );
};

export default EditPost;

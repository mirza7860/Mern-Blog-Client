import React, { useEffect, useState } from "react";
import Post from "../../Components/Post/Post";
const Posts = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://3.110.156.197:8000/post").then((response) => {
      response.json().then((posts) => {
        setposts(posts);
      });
    });
  }, []);
  return (
    <>
      <div className="posts">
        {posts.length > 0 && posts.map((post) => <Post {...post} />)}
      </div>
    </>
  );
};

export default Posts;

import React, { useEffect, useState } from "react";
import Post from "../../Components/Post/Post";
const Posts = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    fetch("https://nice-tan-chimpanzee-sock.cyclic.app/post").then((response) => {
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

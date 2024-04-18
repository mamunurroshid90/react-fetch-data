import React, { useEffect, useState } from "react";

import Post from "./Post";

const loadingMessage = "Post is loading...";

const FetchData = () => {
  const [posts, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw Error("Fetching is not successful!");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setPost(data);
        setIsLoading(false);
        setError(false);
        // console.log(data);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <h2 className=" text-center text-2xl font-bold mt-7">Posts</h2>
      <div className=" grid grid-cols-4 gap-5 px-5 py-10">
        {error && <p className=" text-red-500 text-center">{error}</p>}
        {isLoading && (
          <p className=" text-center text-lg text-blue-600">{loadingMessage}</p>
        )}
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </>
  );
};

export default FetchData;

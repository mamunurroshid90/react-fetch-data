import React from "react";

const Post = (props) => {
  const { id, title, body, userId } = props.post;
  //   console.log(title);
  return (
    <article>
      <div className=" bg-purple-950 rounded shadow-md text-white p-6 h-full">
        <h4 className=" text-center text-xl font-bold">UserId: {userId}</h4>
        <h2 className=" text-lg font-semibold">Title: {title}</h2>
        <p className=" text-sm pt-2">Desc: {body}</p>
      </div>
    </article>
  );
};

export default Post;

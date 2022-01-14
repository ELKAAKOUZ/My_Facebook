import React, { useEffect, useState } from "react";
import Post from "./Post";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetcheduserposts, setFetchedUserPOsts] = useState([]);
  const [httpError, setHttpError] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchPosts = async () => {
      const request = await fetch(
        "https://myfacebook-52de7-default-rtdb.firebaseio.com/Posts.json"
      );
      if (!request.ok) {
        throw new Error("something went wrong ..");
      }
      const response = await request.json();

      console.log(response);
      const loadedPosts = [];
      for (const key in response) {
        loadedPosts.push({
          id: key,
          message: response[key].message,
          postImage: response[key].postImage,
          name: response[key].name,
          image: response[key].image,
          time: response[key].time,
        });
      }
      const ordered_loadedPosts = loadedPosts.sort((a, b) =>
        a.time < b.time ? 1 : -1
      );
      setFetchedUserPOsts(ordered_loadedPosts);
      // console.log(fetcheduserposts);
    };

    fetchPosts().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="text-gray-500 text-center mt-5 ">is loading ...</div>
    );
  }
  if (httpError) {
    return <div className="text-red-500 text-center mt-5 ">{httpError}</div>;
  }
  return (
    <div>
      {fetcheduserposts.map((post) => (
        <Post
          key={post.id}
          name={post.name}
          image={post.image}
          message={post.message}
          postImage={post.postImage}
          time={post.time}
        />
      ))}
    </div>
  );
};

export default Posts;

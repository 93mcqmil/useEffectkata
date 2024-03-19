import { useState, useEffect } from "react";
import axios from "axios";

type Post = {
  id: number;
  title: string;
};

function DataFetching() {
  const [posts, setPosts] = useState<Post[]>([]);

  //We make our get request
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        console.log(res);
        setPosts(res.data); // This will update the post state variable
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Will only render 1 time! shuts of the infinity loop
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
export default DataFetching;

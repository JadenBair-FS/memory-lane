import React from "react";
import BlogPostOne from "../components/blog_posts/post1";
import BlogPostTwo from "../components/blog_posts/post2";
import BlogPostThree from "../components/blog_posts/post3";

function Home() {
  return (
    <div className="flex flex-col h-1/2 justify-center items-center">
      <h1 className="text-3xl font-bold underline my-10">
        Welcome to the Home Page
      </h1>
      <div className="space-y-4 lg:w-1/2">
        <BlogPostOne />
        <BlogPostTwo />
        <BlogPostThree />
      </div>
    </div>
  );
}

export default Home;

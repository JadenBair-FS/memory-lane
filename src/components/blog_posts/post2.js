import React from "react";
import HeaderImage from "../../images/blog-image-2.jpeg";
import BlogPostTemplate from "../../components/BlogPostTemplate";


const BlogPostTwo = () => {
  return (
    <BlogPostTemplate
      title="Blog Post Two"
      content="Some Content"
      author="John Doe"
      date="2021-01-01"
      image={HeaderImage}
      webLink="/blog-post-two"
    />
  );
};

export default BlogPostTwo;
import React from "react";
import HeaderImage from "../../images/blog-image-3.jpeg";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const BlogPostThree = () => {
  return (
    <BlogPostTemplate
      title="Blog Post Three"
      content="Some Content"
      author="John Doe"
      date="2021-01-01"
      image={HeaderImage}
      webLink="/blog-post-three"
    />
  );
};

export default BlogPostThree;

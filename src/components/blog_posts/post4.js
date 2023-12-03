import React, { Fragment } from "react";
import HeaderImage from "../../images/blog-image-4.jpeg";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const BlogPostFour = () => {
  return (
    <BlogPostTemplate
      title="Building an API"
      content={
        <Fragment>
          <p>
            For this post I am going to talk about building an API. I will be
            linking a youtube video that I found very helpful in learning how to
            build an API.{" "}
            <a
              href="https://www.youtube.com/watch?v=-MTSQjw5DrM"
              target="_blank"
              rel="noopener noreferrer"
              style={style.bold}
            >
              Youtube Video CLICK ME!
            </a>{" "}
            A basic API is easy to create, but once you start getting into more
            complex APIs it can be difficult to understand. The video
            demonstrates a basic API. Here is a link to a playlist that goes
            over more complex APIs / more indepth explainations.{" "}
            <a
              href="https://www.youtube.com/watch?v=0oXYLzuucwE&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q"
              target="_blank"
              rel="noopener noreferrer"
              style={style.bold}
            >
              Youtube Playlist CLICK ME!
            </a>
          </p>
        </Fragment>
      }
      author="Jaden Bair"
      date="12/03/2023"
      image={HeaderImage}
      webLink="/blog-post-four"
    />
  );
};

export default BlogPostFour;

const style = {
  bold: {
    fontWeight: "bold",
  },
};

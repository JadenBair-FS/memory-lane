import React, { Fragment } from "react";
import HeaderImage from "../../images/blog-image-2.jpeg";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const BlogPostTwo = () => {
  return (
    <BlogPostTemplate
      title="A great study resourse"
      content={
        <Fragment>
          <p>
            <a
              href="https://www.w3schools.com/"
              target="_blank"
              rel="noreferrer"
            >
              W3Schools
            </a>{" "}
            is a great resource for learning HTML, CSS, JavaScript, and more. I
            have used it many times to help me understand how to do something. I
            have also used it to help me remember how to do something. I would
            recommend it to anyone who is learning to code.
          </p>
        </Fragment>
      }
      author="Jaden Bair"
      date="11/30/2023"
      image={HeaderImage}
      webLink="/blog-post-two"
    />
  );
};

export default BlogPostTwo;

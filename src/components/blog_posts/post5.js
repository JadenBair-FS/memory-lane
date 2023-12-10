import React, { Fragment } from "react";
import HeaderImage from "../../images/blog-image-5.jpeg";
import BlogPostTemplate from "../../components/BlogPostTemplate";

const BlogPostFive = () => {
  return (
    <BlogPostTemplate
      title="React Native"
      content={
        <Fragment>
          <p>
            React Native is a framework for building native mobile apps using
            JavaScript and React. It allows you to create Android and iOS apps
            using only one language for both apps. Thousands of apps are using
            React Native, from established Fortune 500 companies to hot new
            startups. If you're curious to see what can be accomplished with
            React Native, check out these apps!{" "}
            <a
              href="https://reactnative.dev/showcase"
              target="_blank"
              rel="noopener noreferrer"
              style={style.bold}
            >
              React Native Showcase
            </a>
          </p>
        </Fragment>
      }
      author="Jaden Bair"
      date="12/10/2023"
      image={HeaderImage}
      webLink="/blog-post-five"
    />
  );
};

export default BlogPostFive;

const style = {
  bold: {
    fontWeight: "bold",
  },
};


import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BlogPostOne from "./components/blog_posts/post1";
import BlogPostTwo from "./components/blog_posts/post2";
import BlogPostThree from "./components/blog_posts/post3";
import BlogPostFour from "./components/blog_posts/post4";
import BlogPostFive from "./components/blog_posts/post5";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog-post-one" element={<BlogPostOne />} />
          <Route path="/blog-post-two" element={<BlogPostTwo />} />
          <Route path="/blog-post-three" element={<BlogPostThree />} />
          <Route path="/blog-post-four" element={<BlogPostFour />} />
          <Route path="/blog-post-five" element={<BlogPostFive />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

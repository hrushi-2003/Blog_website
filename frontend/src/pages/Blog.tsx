import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";
import FullBlog from "../components/FullBlog";
import Skeleton from "../components/Skeleton";
import AppBar from "../components/AppBar";
const Blog = () => {
  const { id } = useParams();
  const { loading, blog } = useBlog({ id: id || "" });
  console.log(blog);
  if (loading || !blog) {
    return (
      <div>
        <AppBar />
        <div>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  }
  return (
    <div>
      <FullBlog blog={blog} />
    </div>
  );
};

export default Blog;

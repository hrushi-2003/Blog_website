import AppBar from "../components/AppBar";
import BlogCard from "../components/BlogCard";
import Skeleton from "../components/Skeleton";
import useBlogs from "../hooks";
const Blogs = () => {
  const { loading, blogs } = useBlogs();
  if (loading) {
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  return (
    <div className="grid grid-rows-10 justify-center h-screen">
      <div className="row-span-1 sticky top-0">
        <AppBar />
      </div>
      <div className="grid row-span-9 grid-cols-3 w-screen">
        <div className=" col-span-2  overflow-y-scroll overflow-x-hidden">
          {blogs.map((blog) => (
            <BlogCard
              id={blog.id}
              authorName={blog.author.name}
              title={blog.title}
              content={blog.content}
              publishedDate={"2nd feb 2024"}
            />
          ))}
        </div>
        <div className="sticky bg-gray-300 flex flex-col justify-center">
          <h1 className="text-8xl text-center">CREATE</h1>
          <h1 className="text-8xl text-center">YOUR</h1>
          <h1 className="text-8xl text-center">BLOG</h1>
          <h1 className="text-8xl text-center">TODAY</h1>
        </div>
      </div>
    </div>
  );
};

export default Blogs;

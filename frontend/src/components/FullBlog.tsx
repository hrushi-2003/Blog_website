import { Blog } from "../hooks";
import AppBar from "./AppBar";
import { Avatar } from "./BlogCard";
const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <AppBar />
      <div className="grid grid-cols-12 pt-50 px-5 py-5">
        <div className="col-span-8 py-10">
          <div className="text-5xl font-extrabold break-words">
            {blog.title}
          </div>
          <div className="text-slate-400 m-3">Published on 2nd december</div>
          <div className=" break-words leading-relaxed text-left px-6">
            {blog.content}
          </div>
        </div>
        <div className="col-span-4 h-screen w-full p-2">
          <div className="pl-14 text-gray-400 ">Author</div>
          <div className="flex  w-full">
            <div className="px-2">
              <Avatar name={blog.author.name} size={10} />
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-bold text-xl">{blog.author.name.toUpperCase()}</div>
              <div>
                Unleash the power of your words—dive into the art of blogging,
                where every idea finds its voice, and every story leaves a
                lasting impact!{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlog;

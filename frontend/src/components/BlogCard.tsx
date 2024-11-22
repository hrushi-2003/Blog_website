import { Link } from "react-router-dom";

interface BlogCardProps {
  id: number;
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
const BlogCard = ({
  id,
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blogs/${id}`}>
      <div className="p-4 border-b-2 border-slate-200 pb-4 hover:bg-gray-100">
        <div className="flex">
          <div className="flex flex-col justify-center">
            <Avatar name={authorName.toUpperCase()} size={6} />{" "}
          </div>
          <div className="font-extralight pl-2">{authorName.toUpperCase()}</div>{" "}
          <div className="pl-2 font-light">. {publishedDate}</div>
        </div>
        <div className="font-bold pt-4">{title.toUpperCase()}</div>
        <div className="font-light text-slate-400">
          {content.slice(0, 200) + "...."}
        </div>
        <div className="font-light text-slate-600 pt-4">{`${Math.ceil(
          content.length / 100
        )} minute (s) read`}</div>
      </div>
    </Link>
  );
};
export function Avatar({ name, size }: { name: string; size?: Number }) {
  const colorArray = [
    "bg-cyan-300",
    "bg-green-300",
    "bg-amber-300",
    "bg-teal-300",
  ];
  const color = colorArray[Math.floor(Math.random() * 4)];
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full ${color}`}
    >
      <span className="font-medium  text-black">{name[0].toUpperCase()}</span>
    </div>
  );
}

export default BlogCard;

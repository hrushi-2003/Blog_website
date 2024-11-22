import { Avatar } from "./BlogCard";
import { Link, useNavigate } from "react-router-dom";
const AppBar = () => {
  const navigate = useNavigate();
  return (
    <div className="border-b flex justify-between px-10 py-5 bg-slate-400 ">
      <Link to={"/blogs"}>
        <div className="flex items-center">
          <div className="pt-2 text-zinc-800 font-bold text-2xl">
            HRUSHIBLOGS
          </div>
        </div>
      </Link>
      <div>
        <button
          className="mr-10 px-5 py-2 bg-green-400 rounded-md hover:bg-green-300"
          onClick={() => {
            navigate("/publish");
          }}
        >
          Create Your Blog
        </button>
        <Avatar name={"Hrushikesh"} size={10} />
      </div>
    </div>
  );
};

export default AppBar;

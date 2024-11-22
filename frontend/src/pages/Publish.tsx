import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../components/AppBar";
import { BACKEND_URL } from "../config";
const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  async function publish() {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/user/publish`,
      { title, content },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    return navigate(`/blogs/${response.data.id}`);
  }
  return (
    <div className="bg-slate-50 h-screen">
      <AppBar />
      <div className="flex justify-center p-4 w-full">
        <div className=" max-w-screen-lg w-full">
          <input
            type="text"
            className="w-full focus border border-gray-800 rounded-md p-2 bg-slate-300"
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div>
            <textarea
              className=" w-full border border-gray-800 rounded-md mt-4 bg-slate-100"
              rows={8}
              placeholder="Write your content here ..."
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="flex justify-center mt-2">
            <button
              className="mr-10 px-5 py-2 bg-green-400 rounded-md hover:bg-green-300"
              onClick={publish}
            >
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publish;

import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
export interface Blog {
  content: string;
  title: string;
  id: number;
  author: {
    name: string;
  };
}

export const useBlog = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/user/blog/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((x) => {
        setBlog(x.data.blog);
        setLoading(false);
      });
  }, [id]);
  return {
    loading,
    blog,
  };
};

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/api/v1/user/bulk`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((x) => {
        setBlogs(x.data.blogs);
        setLoading(false);
      });
  }, []);
  return {
    loading,
    blogs,
  };
};

export default useBlogs;

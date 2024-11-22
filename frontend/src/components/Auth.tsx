import { SignupInput } from "@hrushikeshreddy/blog-common";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  async function sendRequest() {
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/user/${type == "signup" ? "signup" : "login"}`,
        postInputs
      );
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate(`/blogs`);
    } catch (e) {}
  }
  return (
    <div className="flex justify-center h-screen">
      <div className="flex items-center ">
        <div>
          <div className="px-10 ">
            <div className="text-3xl font-extrabold text-center">
              <div> {type == "signup" ? "Create an account" : "Login"}</div>
            </div>
            <div className="text-slate-400">
              {type == "signup"
                ? "Already have an account ?"
                : "Dont have an Account ? "}
              <Link
                to={type == "signup" ? "/signin" : "/signup"}
                className="underline"
              >
                {type == "signup" ? "Login" : "Create Account"}
              </Link>
            </div>
          </div>
          <div className="pt-4">
            {type == "signup" ? (
              <LabelInput
                label="Name"
                placeholder="John doe..."
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
            ) : null}
            <LabelInput
              label="Username"
              placeholder="abc@gmail.com"
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  email: e.target.value,
                });
              }}
            />
            <LabelInput
              label="Password"
              placeholder="12345678"
              type={"password"}
              onChange={(e) => {
                setPostInputs({
                  ...postInputs,
                  password: e.target.value,
                });
              }}
            />
            <div className="pt-5">
              <button
                type="button"
                className=" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={sendRequest}
              >
                {type == "signin" ? "SignIn" : "SignUp"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface labelledInputType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
function LabelInput({ label, placeholder, onChange, type }: labelledInputType) {
  return (
    <div>
      <label className="block mb-2 text-sm font-semibold text-black pt-2">
        {label}
      </label>
      <input
        type={type}
        onChange={onChange}
        id="first_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:border-black block w-full p-2.5 dark:placeholder-gray-400 dark:text-black  dark:focus:ring-blue-500 dark:focus:border-blue-500 pt-3"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Auth;

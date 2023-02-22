import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="grid grid-cols-2">
      <duv className="bg-primary h-screen grid place-items-center">
        <BsFacebook className="text-white text-[200px]" />
      </duv>

      <div className="grid place-items-center bg-black">
        <div
          onClick={() => signIn("google")}
          className="flex gap-4 bg-[#fff] p-4 px-6 items-center rounded-[6px] cursor-pointer"
        >
          {" "}
          <FcGoogle className="text-[30px]" />
          SignIn With Google
        </div>
      </div>
    </div>
  );
};

export default Login;

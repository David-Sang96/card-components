import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <div className="box">
      <div className="border shadow-xl rounded-md w-[400px] p-10  space-y-4">
        <h2 className="text-center text-3xl font-bold mb-10">Login</h2>
        <input
          type="text"
          placeholder="Enter your email"
          className="block  border-2 border-slate-300 w-full p-2 rounded-xl  pl-4"
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="block  border-2 border-slate-300 w-full p-2 rounded-xl  pl-4"
        />
        <input
          type="button"
          value="Login"
          className="block border w-full p-2 rounded-xl  bg-red-500 text-white"
        />
        <div className="flex justify-between text-sm ">
          <a href="">Forgot Password</a>
          <a href="">Create New Account</a>
        </div>
        <hr className="border-black" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 border-2 border-red-600 px-5 py-1 rounded-xl">
            <FcGoogle />
            <p>Google</p>
          </div>
          <div className="flex items-center gap-3  border-2 border-red-600 px-3 py-1 rounded-xl">
            <FaFacebookSquare className="text-blue-500 rounded-full text-xl" />
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;

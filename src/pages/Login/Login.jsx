import React, { useState } from "react";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";

const Login = () => {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    setError("")
    setSuccess("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    login(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("Login Successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };
  return (
    <div id="bg" className="text-white grid place-items-center">
      <form onSubmit={handleSubmit} className="my-form p-10 w-2/5" action="">
        <h2 className="text-3xl font-bold animate-bounce pb-4">Login</h2>
        <p className="text-green-500 my-2">{success}</p>
        <p className="text-red-500 my-2">{error}</p>
        <input
          type="email"
          name="email"
          required
          placeholder="Type email here"
          className="input bg-transparent input-bordered mb-3 input-primary w-full "
        />
        <div className="relative">
          <input
            type={open ? "text" : "password"}
            name="password"
            required
            placeholder="Type password here"
            className="input bg-transparent input-bordered mb-3 input-primary w-full "
          />
          {open ? (
            <span
              onClick={() => setOpen(!open)}
              className="absolute cursor-pointer top-4 text-[20px] right-5"
            >
              <FaEye />
            </span>
          ) : (
            <span
              onClick={() => setOpen(!open)}
              className="absolute cursor-pointer top-4 text-[20px] right-5"
            >
              <FaEyeSlash />
            </span>
          )}
        </div>
        <button
          style={{
            background:
              "linear-gradient(130deg, #FF56F6 18.31%, #B936EE 43.26%, #3BACE2 85.44%, #406AFF 100%)",
            backdropFilter: "blur(96px)",
            boxShadow: "0px 4px 97px 0px rgba(255, 86, 246, 0.51)",
          }}
          className="btn btn-block outline-0 border-0 text-white"
        >
          Login
        </button>
        <p className="my-3 ">
          New to this site?{" "}
          <Link className="underline" to="/registration">
            Registration
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;

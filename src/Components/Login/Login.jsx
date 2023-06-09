import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const LoginComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = (inputs) => {
    console.log("inputs :>> ", inputs);
    reset({
      email: "",
      password: "",
    });
    navigate("/home");
  };

  return (
    <div className="p-3">
      <div className="login_container">
        <p>Sign In</p>
        <form>
          <div className="my-3">
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-start text-danger">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="password_container">
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-start text-danger">
                {errors.password.message}
              </span>
            )}
            <button
              type="button"
              className="password_toggle"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </button>
          </div>
          <div className="text-end my-3">
            <span onClick={() => navigate("/forget-password")} type="submit">
              Forgot Password
            </span>
          </div>
          <button
            className="submit_button"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginComp;

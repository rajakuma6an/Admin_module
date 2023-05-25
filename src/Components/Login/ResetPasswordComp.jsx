import React, { useState, useEffect } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const ResetPassWordComp = () => {
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
    });
  };

  return (
    <div className="p-3">
      <div className="login_container">
        <p>Reset Password</p>
        <form>
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
              placeholder="New Password"
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
              placeholder="New Password"
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
          <button
            className="submit_button"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassWordComp;

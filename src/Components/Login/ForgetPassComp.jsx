import React, { useState, useEffect } from "react";
import "./style.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgetPassComp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const onSubmit = (inputs) => {
    console.log("inputs :>> ", inputs);
    reset({
      email: "",
    });
    navigate("/reset-password");
  };

  return (
    <div className="p-3">
      <div className="login_container">
        <p>Forget Password</p>
        <small>Please provide registed email id to reset your password</small>
        <form>
          <div className="my-3">
            {" "}
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
          <button
            className="submit_button"
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassComp;

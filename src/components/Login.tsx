import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from './../../node_modules/@hookform/resolvers/zod/src/zod';

type loginData = {
  name: string;
  email: string;
  password: string;
};
const Schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login = () => {
  const {
    register,
    handleSubmit,
    formState : { errors },
  } = useForm<loginData>({
    resolver: zodResolver(Schema),
  });
  const nav = useNavigate();
  const onSubmit = (data: loginData) => {
    fetch(`http://localhost:3000/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else throw new Error("Error");
      })
      .then((data) => {
        alert("dang nhap thanh cong");
        localStorage.setItem("token", data.token);
        nav("/");
      })
      .catch((err) => {
        alert("dang nhap that bai");
        throw new Error(err);
      });
  };
  return (
    <>
      <form
        className="max-w-screen-md m-auto"
        action=""
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-3xl font-semibold text-center">Login</h2>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Email
          </label>
          <input
            className="form-control"
            type="text"
            id=""
            {...register("email", {required: true})}
          />
          {errors.email && <p className="text-danger">{errors.email?.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Password
          </label>
          <input
            className="form-control"
            type="password"
            id=""
            {...register("password", {required: true})}
          />
          {errors.password && <p className="text-danger">{errors.password?.message}</p>}
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary w-full">
            Submit
          </button>
        </div>
        <Link to="/register">Register?</Link>
      </form>
    </>
  );
};

export default Login;

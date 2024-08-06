import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod';
import instance from "../axios";

type AuthFormProps = {
  isRegister: boolean;
}

type AuthData = {
  id?:number|string;
  name?: string;
  email: string;
  password: string;
};

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterSchema = LoginSchema.extend({
  name: z.string().min(4, "Name must be at least 4 characters"),
});

const AuthForm: React.FC<AuthFormProps> = ({ isRegister }) => {
  const nav = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthData>({
    resolver: zodResolver(isRegister ? RegisterSchema : LoginSchema),
  });

  const onSubmit = async (data: AuthData) => {
    try {
      const response = await instance.post(isRegister ? "/register" : "/login", data);
      // console.log(response.data);
      const token = response.data.accessToken;

      // Save token to localStorage
      localStorage.setItem("token", token);

      alert(`${isRegister ? "Registration" : "Login"} successful`);
      nav("/");
    } catch (error) {
      alert(`${isRegister ? "Registration" : "Login"} failed`);
      console.error(error);
    }
  };

  return (
    <form className="max-w-screen-md m-auto my-5" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-semibold text-center">
        {isRegister ? "Register" : "Login"}
      </h2>
      
      {isRegister && (
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" {...register("name")} />
          {errors.name && <p className="text-danger">{errors.name?.message}</p>}
        </div>
      )}

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          className="form-control"
          type="text"
          id="email"
          {...register("email", { required: true })}
        />
        {errors.email && <p className="text-danger">{errors.email?.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          className="form-control"
          type="password"
          id="password"
          {...register("password", { required: true })}
        />
        {errors.password && <p className="text-danger">{errors.password?.message}</p>}
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary w-full">
          {isRegister ? "Register" : "Login"}
        </button>
      </div>
      {isRegister ? (
        <Link to="/login">Login?</Link>
      ) : (
        <Link to="/register">Register?</Link>
      )}
    </form>
  );
};

export default AuthForm;

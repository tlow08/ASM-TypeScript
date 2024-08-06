import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

type registerData = {
    name: string;
    email: string;
    password: string;
}

const Register = () => {
    const {register, handleSubmit, formState:{errors}} = useForm<registerData>();
    const nav = useNavigate();
    const onSubmit = (data:registerData)=>{
        fetch(`http://localhost:3000/register`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type" : "application/json",
            }
        })
        .then(res=> {
            if(res.ok){
                return res.json();
            }
            else throw new Error('Error')
        })
        .then(data=>{
            alert('dang ky thanh cong');
            nav("/login");
        })
        .catch(err => {
            alert("dang ky that bai");
            throw new Error(err);
        })
    }
  return (
    <>
     <form className="max-w-screen-md m-auto" action="" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-3xl font-semibold text-center">Register</h2>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Name</label>
            <input className="form-control" type="text" id="" {...register("name", {required: true, minLength: 6})} />
            {errors.name && <p className='text-danger'>Nam khong duoc de trong va toi thieu 6 ky tu</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Email</label>
            <input className="form-control" type="text" id="" {...register('email',{required:true,pattern:/^\S+\@(\S+\.)+\S{2,10}$/})} />
            {errors.email && <p className='text-danger'>Email ko dung dinh dang</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="" className="form-label">Password</label>
            <input className="form-control" type="password" id="" {...register("password", {required: true, minLength: 6})} />
            {errors.password && <p className='text-danger'>Password khong duoc de trong va toi thieu 6 ky tu</p>}
        </div>
        <div className="mb-3">
        <button type="submit" className="btn btn-primary w-full">Submit</button>
        </div>
        <Link to="/login">Login?</Link>
      </form>
    </>
  )
}

export default Register

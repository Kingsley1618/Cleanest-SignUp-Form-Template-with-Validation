'use client'
import React from 'react';
import Nft from "@/assets/Images/nft wallpaper 3.jpg";
import Image from 'next/image';
import { Form, Input } from 'antd';
import Link from 'next/link';
import { FcGoogle } from "react-icons/fc";
import { useFormik } from 'formik';
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmpassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission here
      console.log('Form submitted with values:', values);
    },
  });

  return (
    <div className="flex justify-center h-screen items-center bg-[rgb(249,249,249)] p-4">
      <Form
        name="normal_login"
        className="bg-white rounded-lg py-5 md:px-8 px-3 max-w-[500px] w-[100%] shadow-2xl"
        onFinish={formik.handleSubmit}
      >
        <Image src={Nft} className="rounded-full w-[50px] h-[50px] my-2 mx-auto block" width={50} height={50} alt="logo" />
        <Form.Item
          
          autoComplete="off"
        >
          <Input
            type='email'
            name='email'
            size='large'
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </Form.Item>

        <Form.Item
          
          
     
        >
          <Input.Password
            type="password"
            size='large'
            name='password'
            placeholder="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500">{formik.errors.password}</div>
          ) : null}
        </Form.Item>

        <Form.Item
          name="confirmpassword"
          
        
        >
          <Input.Password
            type="password"
            size='large'
            name='confirmpassword'
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmpassword}
          />
          {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
            <div className="text-red-500">{formik.errors.confirmpassword}</div>
          ) : null}
        </Form.Item>

        <input type="submit" className='w-[100%] cursor-pointer max-w-[550px] mt-4 bg-[rgb(22,119,255)] text-white font-bold py-3 rounded-lg mx-auto block' value="Signup" />

        <h1 className="text-[.9rem] mt-3 text-center text-gray-500  font-bold">Already have an account? <Link href="/" className="text-blue-500 font-bold">Login</Link></h1>

        <div className='flex gap-x-3 mt-3'>
          <div className="flex-1 border-[1.2px] border-b-gray-300 border-t-0 border-r-0 border-l-0 relative top-[-10px]"></div>
          <h1 className="text-[21px] font-normal">or</h1>
          <div className="flex-1 border-[1.2px] border-b-gray-300 border-t-0 border-r-0 border-l-0 relative top-[-10px]"></div>
        </div>

        <button type='button' className='flex rounded-lg mx-auto mt-6 max-w-[500px] w-[100%] block items-center text-[1rem] border-gray-300 border-[1.1px] py-2 px-1'>
          <FcGoogle className="text-[25px]" />
          <h1 className="text-gray-400 mx-auto font-bold">Login with Google</h1>
        </button>
      </Form>
    </div>
  );
}

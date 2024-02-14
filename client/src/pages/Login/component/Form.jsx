import React from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useFormik } from "formik";
import {jwtDecode} from "jwt-decode";
import axios from "axios"

import { successAlert, errorAlertWithMessage } from "../../../helper/alert"
import { login } from "../../../reducers/userSlice";

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    onSubmit: async(values) => {
      try {
        const result = await axios.post (`${process.env.REACT_APP_BASE_URL}/user/login`, values)
        await successAlert(result.data.message)
        const decode = await jwtDecode(result.data.token, {
          header: process.env.REACT_APP_ACCESS_TOKEN
        })
        const dispatchValue = {
          id: decode.id,
          firstName: decode.firstName,
          lastName: decode.lastName,
          refreshToken: result.data.refresh_token
        }
        dispatch(login(dispatchValue))
        navigate("/")
      } catch (error) {
        errorAlertWithMessage(error?.response?.data?.message)
      }
    },

    validate: values => {
      let errors = {}

      if(!values.email){
        errors.email = 'Email Required'
      } else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)){
        errors.email = 'Invalid Email Format'
      }

      if(!values.password){
        errors.password = 'Password Required'
      }
      return errors
    }
  });
  // console.log("Visited Fields", formik.touched)

  return (
    <div className="text-center">
      <form
        onSubmit={formik.handleSubmit}
        className="lg:flex  lg:flex-col lg:items-center"
      >
        <input
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          className=" w-3/4 rounded-md border border-gray-400 bg-gray-50 px-4 py-3 font-montserrat text-sm text-slate-600 placeholder-gray-400 lg:w-1/2"
          placeholder="Email"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="font-montserrat text-red-600 font-medium text-xs mt-2">
            <p>{formik.errors.email}</p>
          </div>
        )}
        <input
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          className=" mt-5 w-3/4 rounded-md border border-gray-400 bg-gray-50 px-4 py-3 font-montserrat text-sm text-slate-600 placeholder-gray-400 lg:w-1/2"
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password && (
          <div className="font-montserrat text-red-600 font-medium text-xs mt-2">
            <p>{formik.errors.password}</p>
          </div>
        )}
        <button type="submit" className="font-helvetica  bg-primaryBlue px-10 rounded-md hover:bg-primaryYellow transition duration-100 py-2 text-white lg:px-28 lg:mt-4 mt-6"> Sign in </button>
      </form>
    </div>
  );
};

export default Form;

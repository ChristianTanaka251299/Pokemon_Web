import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { getUser } from "../../../function/users"
import { successAlert } from "../../../helper/alert";

const FormEdit = () => {
const userId = useSelector((state) => state.user.id)
const navigate = useNavigate()

  const menu = [
    {
      name: "email",
      type: "email",
      disabled:true,
      placeholder: "Hello nice to meet you !!"
    },
    {
      name: "status",
      type: "status",
      disabled: false,
      placeholder: "christian.tanaka2512@gmail.com"
    },
    {
      name: "password",
      disabled: false,
      type: "password",
      placeholder: "strong_password123#"
    },
    {
      name: "verify",
      disabled: false,
      type: "password",
      placeholder: "strong_password123#"
    },
  ];

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      status: "",
      password: "",
      verify: "",
      
    },

    onSubmit: async (values) => {
      try {
        const result = await axios.patch(
          `${process.env.REACT_APP_BASE_URL}/user/update/${userId}`,
          values,
        );
        await successAlert(result.data.message);
        navigate("/profile")
      } catch (error) {
        console.log(error);
      }
    },

    validate: (values) => {
      let errors = {};
      if (!values.first_name) {
        errors.first_name = "Required";
      }
      if (!values.last_name) {
        errors.last_name = "Required";
      }

      if (!values.email) {
        errors.email = "Email Required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.email = "Invalid Email Format";
      }

    //   if (!values.password) {
    //     errors.password = "Password Required";
    //   }

    //   if (values.password !== values.verify) {
    //     errors.verify = "Password doesn't match";
    //   }
      return errors;
    },
  });

  const getCurrentUser = async () => {
    try {
      const result = await getUser(userId);
      formik.setValues({
        first_name: result?.first_name || "",
        last_name: result?.last_name || "",
        email: result?.email || "",
        status: result?.status || "",
      });
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <div className="text-center">
      <form
        onSubmit={formik.handleSubmit}
        className="container-screen lg:flex lg:flex-col lg:items-center"
      >
        <div className="grid grid-cols-2 gap-2 lg:w-3/5 lg:gap-5">
          <div className="flex flex-col">
            <label
              htmlFor="first_name"
              className="mb-1 mr-auto font-montserrat text-xs"
            >
              First Name :
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              onChange={formik.handleChange}
              value={formik.values.first_name}
              onBlur={formik.handleBlur}
              className=" w-full rounded-sm border border-gray-400 bg-gray-50 px-4 py-1 font-montserrat text-sm text-slate-600 placeholder-gray-400 lg:w-full"
              placeholder="Christian"
            />
            {formik.touched.first_name && formik.errors.first_name && (
              <div className="mt-2 text-left font-montserrat text-xs font-medium text-red-600">
                <p>{formik.errors.first_name}</p>
              </div>
            )}
          </div>
          <div className="flex flex-col ">
            <label
              htmlFor="last_name"
              className="mb-1 mr-auto font-montserrat text-xs"
            >
              Last Name :
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              onChange={formik.handleChange}
              value={formik.values.last_name}
              onBlur={formik.handleBlur}
              className=" w-full rounded-sm border border-gray-400 bg-gray-50 px-4 py-1 font-montserrat text-sm text-slate-600 placeholder-gray-400 lg:w-full"
              placeholder="Tanaka"
            />
            {formik.touched.last_name && formik.errors.last_name && (
              <div className="mt-2 text-left font-montserrat text-xs font-medium text-red-600">
                <p>{formik.errors.last_name}</p>
              </div>
            )}
          </div>
        </div>
        {menu.map((value) => (
          <div className="mt-3 flex flex-col lg:w-3/5">
            <label
              htmlFor={value.name}
              className="mb-1 mr-auto font-montserrat text-xs"
            >
              <p>{`${value.name} :`}</p>
            </label>
            <input
            disabled={value.disabled}
              type={value.type}
              id = {value.name}
              name= {value.name}
              onChange={formik.handleChange}
              value={formik.values[value.name]}
              onBlur={formik.handleBlur}
              className=" w-full rounded-sm border border-gray-400 bg-gray-50 px-4 py-1 font-montserrat text-sm text-slate-600 placeholder-gray-400 lg:w-full"
              placeholder= {value.placeholder}
            />
            {formik.touched[value.name]&& formik.errors[value.name]&& (
              <div className="mt-2 text-left font-montserrat text-xs font-medium text-red-600">
                <p>{formik.errors[value.name]}</p>
              </div>
            )}
          </div>
        ))}    
        <button
          type="submit"
          className="mt-6  rounded-md bg-primaryBlue px-10 py-2 font-helvetica text-white transition duration-100 hover:bg-primaryYellow lg:mt-10 lg:mt-4 lg:px-28"
        >
          {" "}
          Save{" "}
        </button>
      </form>
    </div>
  );
};

export default FormEdit;
import React from "react";
import { useFormik } from "formik";
import axios from "axios";

import { successAlert } from "../../../helper/alert";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      verify: "",
    },

    onSubmit: async (values) => {
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/user/login`,
          values,
        );
        await successAlert(result.data.message);
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

      if (!values.password) {
        errors.password = "Password Required";
      }

      if (values.password !== values.verify) {
        errors.verify = "Password doesn't match";
      }
      return errors;
    },
  });

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
        <div className="mt-3 flex flex-col lg:w-3/5">
          <label
            htmlFor="email"
            className="mb-1 mr-auto font-montserrat text-xs"
          >
            Email :
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            className=" w-full rounded-sm border border-gray-400 bg-gray-50 px-4 py-1 font-montserrat text-sm text-slate-600 placeholder-gray-400 lg:w-full"
            placeholder="christian.tanaka2512@gmail.com"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="mt-2 text-left font-montserrat text-xs font-medium text-red-600">
              <p>{formik.errors.email}</p>
            </div>
          )}
        </div>
        <div className="mt-3 flex flex-col lg:w-3/5">
          <label
            htmlFor="password"
            className="mb-1 mr-auto font-montserrat text-xs"
          >
            Password :
          </label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            className=" w-full rounded-sm border border-gray-400 bg-gray-50 px-4 py-1 font-montserrat text-sm text-slate-600 placeholder-gray-400 lg:w-full"
            placeholder="strong_password123#"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="mt-2 text-left font-montserrat text-xs font-medium text-red-600">
              <p>{formik.errors.password}</p>
            </div>
          )}
        </div>
        <div className="mt-3 flex flex-col lg:w-3/5">
          <label
            htmlFor="verify"
            className="mb-1 mr-auto font-montserrat text-xs"
          >
            Verify Password :
          </label>
          <input
            type="text"
            id="verify"
            name="verify"
            onChange={formik.handleChange}
            value={formik.values.verify}
            onBlur={formik.handleBlur}
            className=" w-full rounded-sm border border-gray-400 bg-gray-50 px-4 py-1 font-montserrat text-sm text-slate-600 placeholder-gray-400 lg:w-full"
            placeholder="strong_password123#"
          />
          {formik.touched.verify && formik.errors.verify && (
            <div className="mt-2 text-left font-montserrat text-xs font-medium text-red-600">
              <p>{formik.errors.verify}</p>
            </div>
          )}
        </div>

        <button
          type="submit"
          className="mt-6  rounded-md bg-primaryBlue px-10 py-2 font-helvetica text-white transition duration-100 hover:bg-primaryYellow lg:mt-10 lg:mt-4 lg:px-28"
        >
          {" "}
          Sign up{" "}
        </button>
      </form>
    </div>
  );
};

export default Form;

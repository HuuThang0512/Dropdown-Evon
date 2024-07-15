/* eslint-disable no-unused-vars */
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required"
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 characters or less";
//   }

//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 10) {
//     errors.lastName = "Must be 10 characters or less";
//   }
//   return errors
// };

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          placeholder="Enter your first name..."
          autoComplete="off"
          {...formik.getFieldProps("firstName")}
          className=" rounded-md bg-white p-4 border shadow-[0px_0px_0px_1px_#2979FF]"
        />
        {formik.errors.firstName && formik.touched.firstName && (
          <p className="text-red-500">{formik.errors.firstName}</p>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <label htmlFor="firstName">Last Name</label>
        <input
          type="text"
          id="lastName"
          placeholder="Enter your first name..."
          autoComplete="off"
          {...formik.getFieldProps("lastName")}
          className=" rounded-md bg-white p-4 border shadow-[0px_0px_0px_1px_#2979FF]"
        />
        {formik.errors.lastName && formik.touched.lastName && (
          <p className="text-red-500">{formik.errors.lastName}</p>
        )}
      </div>
      <div className="text-center">
        <button
          type="submit"
          className=" w-full
                p-4 mt-10 bg-blue-600 text-white font-semibold rounded-lg"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignupForm;

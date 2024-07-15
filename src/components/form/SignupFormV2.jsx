/* eslint-disable no-unused-vars */
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignupFormV2 = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
      })}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="p-10 w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-2">
          <label htmlFor="firstName">First Name</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name..."
            autoComplete="off"
            className=" rounded-md bg-white p-4 border shadow-[0px_0px_0px_1px_#2979FF]"
          />
          <div className="text-red-500 font-medium">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-6">
          <label htmlFor="firstName">Last Name</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your first name..."
            autoComplete="off"
            className=" rounded-md bg-white p-4 border shadow-[0px_0px_0px_1px_#2979FF]"
          />
          <div className="text-red-500 font-medium">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
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
      </Form>
    </Formik>
  );
};

export default SignupFormV2;

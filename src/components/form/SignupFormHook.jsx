/* eslint-disable no-unused-vars */
import React from "react";
import { useForm } from "react-hook-form";

const SignupFormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => console.log(values);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="firstName">First Name</label>
        <input
          {...register("firstName", {
            required: true,
            maxLength: 15,
          })}
          type="text"
          id="firstName"
          placeholder="Enter your first name..."
          autoComplete="off"
          className=" rounded-md bg-white p-4 border shadow-[0px_0px_0px_1px_#2979FF]"
        />
        {errors?.firstName?.type == "required" && (
          <div className="text-red-500">Please fill this field</div>
        )}
        {errors?.firstName?.type == "maxLength" && (
          <div className="text-red-500">Only 15 characters or less</div>
        )}
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <label htmlFor="firstName">Last Name</label>
        <input
          {...register("lastName")}
          type="text"
          id="lastName"
          placeholder="Enter your first name..."
          autoComplete="off"
          className=" rounded-md bg-white p-4 border shadow-[0px_0px_0px_1px_#2979FF]"
        />
      </div>

      <div className="flex flex-col gap-2 mt-10">
        <label htmlFor="firstName">Email Address</label>
        <input
          {...register("email")}
          type="text"
          id="email"
          placeholder="Enter your email address..."
          autoComplete="off"
          className=" rounded-md bg-white p-4 border shadow-[0px_0px_0px_1px_#2979FF]"
        />
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

export default SignupFormHook;

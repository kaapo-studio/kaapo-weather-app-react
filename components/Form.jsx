import { Component } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, userLogIn, userLogOut } from "@/lib/slices/userSlice";

import Input from "./Input";
import Button from "./Button";
import styles from "@/styles/components/Form.module.scss";

const Form = () => {
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
  });

  const dispatch = useDispatch();
  const { auth } = useSelector(selectUser);

  const onSubmit = (data) => {
    console.log(data);
    dispatch(userLogIn());
    console.log("auth", auth);
  };

  const formFields = [
    {
      iName: "name",
      iPlaceholder: "Name",
      iType: "text",
      required: "Name is required.",
      error: {
        required: "Name is required.",
        pattern: {
          value: /^[A-Za-z]+$/i,
          message: "Name must have letters only.",
        },
        minLength: {
          value: 4,
          message: "Name must exceed 10 characters",
        },
      },
    },
    {
      iName: "email",
      iPlaceholder: "Email",
      iType: "text",
      error: {
        required: "Must be name@domain.com.",
        pattern: {
          value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Email must contain name@domain.com.",
        },
        minLength: {
          value: 12,
          message: "Email must exceed 10 characters",
        },
      },
    },
    {
      iName: "password",
      iPlaceholder: "Password",
      iType: "password",
      error: {
        required: "Password is required.",
        pattern: {
          value: null,
          message: "Password need to contain numbers and letters.",
        },
        minLength: {
          value: 12,
          message: "Password must exceed 10 characters",
        },
      },
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      {formFields.map((field) => (
        <Input
          key={field.iName}
          iName={field.iName}
          iType={field.iType}
          iPlaceholder={field.iPlaceholder}
          register={register}
          required={field.error.required}
          pValue={field.error.pattern.value}
          pVapMessagelue={field.error.pattern.message}
          minValue={field.error.minLength.value}
          minMessage={field.error.minLength.message}
          errors={errors}
        />
      ))}
      <Button type="submit" name="Continue" />
    </form>
  );
};

export default Form;

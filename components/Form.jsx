import { Component } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "./Button";
import styles from "@/styles/components/Form.module.scss";

const Form = () => {
  const { register, errors, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (data) => console.log(data);

  const formFields = [
    {
      iName: "name",
      iPlaceholder: "Name",
      iType: "text",
      required: "Name is required.",
      error: {
        required: "Name is required.",
        pattern: {
          value: /\d+/,
          message: "Name is number only.",
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
        required: "Email is required.",
        pattern: {
          value: /\d+/,
          message: "Email is number only.",
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
          value: /\d+/,
          message: "Password is number only.",
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

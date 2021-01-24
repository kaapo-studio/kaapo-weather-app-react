import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import styles from "@/styles/components/Input.module.scss";

const Input = ({
  iName,
  iType,
  iPlaceholder,
  register,
  required,
  pValue,
  pMessage,
  minValue,
  minMessage,
  errors,
}) => {
  return (
    <div className={styles.inpuContainer}>
      <div className={styles.inpuContainer__inputBox}>
        <div className={styles.inpuContainer__inputBox__icon}>
          <img src={`/icons/auth/${iName}.png`} alt={`${iName} input icon`} />
        </div>
        <input
          type={iType}
          name={iName}
          placeholder={iPlaceholder}
          ref={register({
            required,
            pattern: {
              value: pValue,
              message: pMessage,
            },
            minLength: {
              value: minValue,
              message: minMessage,
            },
          })}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={iName}
        render={({ messages }) => {
          console.log("messages", messages);
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <div className={styles.inpuContainer__error} key={type}>
                  <span>{message}</span>
                </div>
              ))
            : null;
        }}
      />
    </div>
  );
};

export default Input;

import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import clsx from "clsx";
import Icon from "../Icon/Icon.jsx";

import css from "./Input.module.css";

export default function Input({ name, label, type = "text", validation }) {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const hasError = !!errors[name];
  const isValid = !hasError && control._formValues[name];

  return (
    <Controller
      name={name}
      control={control}
      rules={validation}
      render={({ field }) => (
        <div>
          <label className={css.label} htmlFor={name}>
            {label}
          </label>
          <div className={css.inputWrapper}>
            <input
              {...field}
              id={name}
              type={type === "password" && isPasswordVisible ? "text" : type}
              className={clsx(css.input, {
                [css.inputError]: hasError,
                [css.inputValid]: isValid,
              })}
              placeholder={label}
            />

            {type === "password" && !hasError && !isValid && (
              <div onClick={handleTogglePasswordVisibility}>
                {isPasswordVisible ? (
                  <Icon id="icon-eye" width="20" height="20" />
                ) : (
                  <Icon id="icon-eyeOff" width="20" height="20" />
                )}
              </div>
            )}

            {hasError && <Icon id="icon-error" width="20" height="20" />}

            {isValid && <Icon id="icon-check" width="20" height="20" />}
          </div>
          {/* Повідомлення про помилку під інпутом */}
          {hasError && (
            <p className={css.errorMessage}>{errors[name]?.message}</p>
          )}
        </div>
      )}
    />
  );
}

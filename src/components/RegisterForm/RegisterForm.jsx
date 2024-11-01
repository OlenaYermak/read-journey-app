import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Input from "../Input/Input.jsx";

export default function RegisterForm() {
  const registerValidationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, "Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(7, "Password must be at least 7 characters")
      .required("Password is required"),
  });

  const methods = useForm({
    resolver: yupResolver(registerValidationSchema),
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="form">
        <Input name="name" label="Name:" />
        <Input name="email" label="Mail:" />
        <Input name="password" label="Password:" type="password" />
        <button type="submit">Register</button>
      </form>
    </FormProvider>
  );
}

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "../schemas/login.schema";

export const useLogin = (
  setSnackbarOpen: Dispatch<SetStateAction<boolean>>
) => {
  const router = useRouter();

  // React Hook Form setup with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  // Handle the login process
  const onSubmit = (data: LoginSchemaType) => {
    const { email, password } = data;

    const validCredentials = {
      email: "fakedoor@challenge.com",
      password: "password123",
    };

    if (
      email === validCredentials.email &&
      password === validCredentials.password
    ) {
      console.log("Success");
      localStorage.setItem("user", JSON.stringify({ email }));
      router.push("/");
    } else {
      console.log("Invalid credentials");
      setSnackbarOpen(true);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";

const validCredentials = {
  email: "fakedoor@challenge.com",
  password: "password123",
};

export const useLogin = (
  setSnackbarOpen: Dispatch<SetStateAction<boolean>>
) => {
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
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
    handleLogin,
  };
};

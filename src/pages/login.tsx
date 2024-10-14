import React, { useEffect } from "react";
import { Login } from "../components/Login";
import { useRouter } from "next/router";

const login = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      router.push("/");
    }
  }, [router]);

  return <Login />;
};

export default login;

import React, { useEffect } from "react";
import { Login } from "../components/Login";
import { useRouter } from "next/router";
import Head from "next/head";

const login = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      router.push("/");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login to access your account." />{" "}
      </Head>
      <Login />
    </>
  );
};

export default login;

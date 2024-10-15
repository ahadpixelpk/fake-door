import React from "react";
import AppLayout from "../_layout/AppLayout";
import Home from "../components/Home";
import Head from "next/head";

const home = () => {
  return (
    <>
      <Head>
        <title>Fake Door | Lessons</title>
        <meta name="description" content="Login to access your account." />{" "}
      </Head>
      <AppLayout children={<Home />} />
    </>
  );
};

export default home;

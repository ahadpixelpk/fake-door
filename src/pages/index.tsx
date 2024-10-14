import React from "react";
import AppLayout from "../_layout/AppLayout";
import Home from "../components/Home";

const home = () => {
  return <AppLayout children={<Home />} />;
};

export default home;

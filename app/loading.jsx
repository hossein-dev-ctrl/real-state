"use client";

import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};
const LoadingPage = () => {
  return (
    <ClipLoader
      cssOverride={override}
      color="#3b82f66"
      size={150}
      aria-label="loading spinner"
    />
  );
};

export default LoadingPage;

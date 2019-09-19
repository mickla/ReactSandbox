import React from "react";

const Hallo = ({ greeting }) => {
  console.log("hey kerel");
  const f = () => {
    return "test";
  };
  return <div>{`test123 ${f()} greeting`}</div>;
};

export default Hallo;

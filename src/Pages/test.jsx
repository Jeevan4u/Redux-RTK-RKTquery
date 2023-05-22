import React from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
  const nav = useNavigate();
  return (
    <div>
      test
      <button
        onClick={() => {
          nav("/");
        }}
      >
        Go back
      </button>
    </div>
  );
};

export default Test;

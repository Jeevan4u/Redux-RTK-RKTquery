import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../features/cake/cakeSlice";
const Cake = () => {
  const numofCakes = useSelector((state) => state.cake.numOfCake);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {numofCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Cakes
      </button>
      <button
        onClick={() => {
          dispatch(restocked(5));
        }}
      >
        Restock Cakes
      </button>
    </div>
  );
};

export default Cake;

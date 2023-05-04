import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "../features/icecream/icecreamSlice";
const IceCream = () => {
  const totalIcecream = useSelector((state) => state.ice.noOfIceCreame);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Icecream -{totalIcecream} </h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Icecream
      </button>
      <button
        onClick={() => {
          dispatch(restocked(5));
        }}
      >
        Restock Icecream
      </button>
    </div>
  );
};

export default IceCream;

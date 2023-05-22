import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../features/cake/cakeSlice";
import {
  useGetTodosQuery,
  useGetUserByIdQuery,
  usePostUsersMutation,
} from "../features/api/apiSlice";
import { Navigate, useNavigate } from "react-router-dom";
const Cake = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const allData = useSelector((data) => data.user);
  const { data, isLoading } = useGetTodosQuery();
  const [userPost, { isLoading: userLoading, isSuccess }] =
    usePostUsersMutation();
  const [inputData, setInputData] = useState({});
  const submitHandler = (allData) => {
    console.log(allData);
    userPost(allData);
  };
  // useEffect(() => {
  //   if (allData) {
  //     submitHandler(allData);
  //   }
  // }, [isSuccess]);
  console.log(inputData);
  if (isLoading) {
    return <h>Loading ....</h>;
  }

  // const { data } = useGetUserByIdQuery(5);
  return (
    <div className="grid place-content-center">
      form Users Lists :
      <form
        onSubmit={(e) => e.preventDefault()}
        className="border-blue-700 border-2 p-4"
      >
        <div className="Username">
          <label htmlFor="Username">Username :</label>
          <input
            type="text"
            name="username"
            id=""
            placeholder="Enter Username"
            className="text-black border-none p-2 rounded mx-2"
            onChange={(e) => {
              setInputData((prevState) => ({
                ...prevState,
                userName: e.target.value,
              }));
            }}
          />
        </div>
        <div className="Name">
          <label htmlFor="name">name :</label>
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter Name"
            className="text-black border-none p-2 rounded mx-2"
            onChange={(e) => {
              setInputData((prevState) => ({
                ...prevState,
                Name: e.target.value,
              }));
            }}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Name"
            className="text-black border-none p-2 rounded mx-2"
            onChange={(e) => {
              setInputData((prevState) => ({
                ...prevState,
                inputEmail: e.target.value,
              }));
            }}
          />
        </div>
        <div className="email">
          <label htmlFor="Add">Address :</label>
          <input
            type="text"
            name="address"
            id="Address"
            placeholder="Enter address"
            className="text-black border-none p-2 rounded mx-2"
            onChange={(e) => {
              setInputData((prevState) => ({
                ...prevState,
                address: e.target.value,
              }));
            }}
          />
        </div>

        <button
          type="submit"
          className="border-blue-500"
          onClick={() => {
            // dispatch(submitForm(inputData));
            submitHandler(inputData);
          }}
        >
          Submit
        </button>
      </form>
      {data?.map((el, i) => {
        return (
          <li key={i} className="appearance-none list-none py-2">
            <h1>{el.name}</h1>
            <h1>{el.username}</h1>
            <h1>{el.email}</h1>
          </li>
        );
      })}
      <button
        onClick={() => {
          nav("/test");
        }}
      >
        GoTo
      </button>
    </div>
  );
};

export default Cake;

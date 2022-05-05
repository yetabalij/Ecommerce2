import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SignUpContainer = styled.div`
  ${tw`
        grid 
        min-h-screen 
        place-items-center
    `}
`;

//initial state
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, email, password } = formValue;

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SignUpContainer>
      <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
        <h1 class="text-xl font-semibold">
          Hello there 👋,{" "}
          <span class="font-normal">
            please fill in your information to continue
          </span>
        </h1>
        <form onSubmit={handleSubmit} class="mt-6">
          <div class="flex justify-between gap-3">
            <span class="w-1/2">
              <label
                for="firstname"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                Firstname
              </label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={onInputChange}
                placeholder="First Name"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
            <span class="w-1/2">
              <label
                for="lastName"
                class="block text-xs font-semibold text-gray-600 uppercase"
              >
                Lastname
              </label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={onInputChange}
                placeholder="Last Name"
                class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
                required
              />
            </span>
          </div>
          <label
            for="email"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            E-mail
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="example@domain.com"
            class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <label
            for="password"
            class="block mt-2 text-xs font-semibold text-gray-600 uppercase"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onInputChange}
            placeholder="********"
            class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
            required
          />
          <button
            type="submit"
            class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
          >
            Sign up
          </button>
          <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">
            <Link to="/signin">Already registered?</Link>
          </p>
        </form>
      </div>
    </SignUpContainer>
  );
};

export default Signup;

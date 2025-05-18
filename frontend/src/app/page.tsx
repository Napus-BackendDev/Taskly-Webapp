"use client";

import { FaUser } from "react-icons/fa";
import React, { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name);
    console.log(password);

    try {
      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          password,
        }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();
      console.log("Login Success", data);

      // add token
      // localStorage.setItem('token',)
    } catch (error) {
      console.error("Login Error", error);
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="bg-amber-100 justify-center mx-28 my-20">
        <div className="justify-center items-center my-2">
          <h2 className=" text-[#666666] text-[30px] font-medium">Taskly</h2>
          <h1 className=" text-black text-[30px] font-medium">Login</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex bg-gray-300 border">
            <FaUser className=" w-6 h-auto mx-2"/>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2  w-full "
              placeholder="Usernam"
            />
          </div>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 mt-2"
            placeholder="Password"
          />
          <button type="submit" className=" border p-2 mt-2 rounded-3xl">
            {" "}
            Login{" "}
          </button>
        </form>

        <div className="flex items-center my-6 mx-9">
          <div className="flex-grow border-t"></div>
          <span className="mx-4 text-gray-500"> or</span>
          <div className="flex-grow border-t"></div>
        </div>

        <div className="flex justify-center gap-6">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
        </div>
      </div>
      <div className=" bg-amber-400"></div>
    </div>
  );
}

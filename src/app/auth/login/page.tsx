"use client";

import Icons from "@/components/svg/Icons";
import { avatar, user } from "@/store/userReducer";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const API_THREADBOOK = process.env.API_THREADBOOK;
type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const [password, setPassword] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<Inputs>();
  const router = useRouter();
  const dispatch = useDispatch();
  const fetchLogin = async (logs: Inputs) => {
    const response = await fetch("http://localhost:3000/auth/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(logs),
    });
    const data = await response.json();

    if (!data.error) {
      const profilePicture = await fetch(
        `${API_THREADBOOK}files/${data.user.avatar}`
      );
      dispatch(avatar(profilePicture.url));
      dispatch(
        user({
          user_id: data.user._id,
          username: data.user.username,
          email: data.user.email,
          pages: data.user.pageRead,
        })
      );
      document.cookie = `access_token=${data.token.access_token}; path=/; samesite=strict`;
      router.push("/home");
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    fetchLogin(data);
    reset();
  };
  return (
    <div className="flex h-screen w-screen bg-background bg-cover bg-center flex-col justify-center items-center ">
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-5 shadow-2xl shadow-charcol bg-beige-light font-raleway items-center rounded-[24px] p-4"
      >
        <h4 className="font-bold ">Login</h4>
        <input
          className="flex p-1 rounded-t-lg w-full border-b-2 border-charcol "
          placeholder="email"
          {...register("email")}
        />
        <span className="flex items-center gap-2">
          {" "}
          <input
            className="flex p-1 rounded-t-lg border-b-2 border-charcol"
            type={password ? "text" : "password"}
            placeholder="password"
            {...register("password")}
          />
          <span
            onClick={() => {
              setPassword(!password);
            }}
          >
            {password ? (
              <Icons name="eyeOpen" className="flex w-[20px]"></Icons>
            ) : (
              <Icons name="eyeClose" className="flex w-[20px]"></Icons>
            )}
          </span>
        </span>
        <button
          type="submit"
          className="flex w-3/4 bg-olive-dark items-center justify-center rounded-full text-white"
        >
          login
        </button>
        <Link
          href={"/auth/signUp"}
          className="underline underline-offset-2 text-olive-dark "
        >
          {" "}
          sign up
        </Link>
      </form>
    </div>
  );
}

"use client";
import Link from "next/link";
import React, { useEffect } from "react";
const API_THREADBOOK = process.env.API_THREADBOOK;
export default function Hero() {
  const fetchiActivateBackend = async () => {
    try {
      const response = await fetch(`${API_THREADBOOK}/books/`);
      const data = await response.json();
    } catch (error) {
      console.error("activate backEnd api");
    }
  };

  useEffect(() => {
    fetchiActivateBackend();
  });
  return (
    <>
      <div className="flex h-screen w-screen bg-background bg-cover bg-center flex-col gap-20  justify-center items-center ">
        <h1 className="text-white font-bold text-[5rem] leading-none text-center z-10  ">
          Thread Book
        </h1>
        <div className="text-white leading-5 text-justify w-[70%] z-10 flex flex-col">
          <span>Découvrez une nouvelle façon de suivre vos lectures !</span>{" "}
          Thread Book est votre compagnon pour organiser, sauvegarder et suivre
          vos lectures. Que vous soyez un lecteur occasionnel ou un passionné de
          littérature, notre site vous offre les outils nécessaires pour
          enrichir votre expérience de lecture.
        </div>
        <div className="flex w-screen opacity-40 h-screen bg-charcol absolute gap-10 "></div>
        <Link
          className=" flex w-[200] h-200 justify-center items-center z-50 text-white text-[1.5rem] underline-offset-4 underline leading-none"
          href={"/home"}
        >
          enter
        </Link>
      </div>
    </>
  );
}

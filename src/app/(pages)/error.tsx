"use client";
import React from "react";

export default function Error({ error }: { error: Error }) {
  return (
    <main className="flex justify-center w-screen h-screen">
      {error.message}
    </main>
  );
}

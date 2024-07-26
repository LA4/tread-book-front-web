import React, { useEffect, useState } from "react";

type StatusProps = {
  handleStatus: (status: string | undefined) => void;
};

export default function CategorySelector({ handleStatus }: StatusProps) {
  const [status, setStatus] = useState<string>();

  return (
    <div className="flex text-beige-light gap-2 px-2 justify-between overflow-x-auto overflow-y-hidden w-full ">
      <span
        onClick={() => {
          setStatus("");
          handleStatus("null");
        }}
        className={`flex items-center text-[14px] cursor-pointer hover:translate-y-[2px] text-olive-dark p-2 rounded-lg ${
          status === "" && " font-bold underline "
        }`}
      >
        All
      </span>
      <span
        onClick={() => {
          setStatus("Read");
          handleStatus("READ");
        }}
        className={`flex items-center text-[14px] cursor-pointer hover:translate-y-[2px] text-olive-dark p-2 rounded-lg ${
          status === "Read" && " font-bold underline "
        }`}
      >
        Read
      </span>
      <span
        onClick={() => {
          setStatus("Reading");
          handleStatus("CURRENTLY_READING");
        }}
        className={`flex items-center text-[14px] cursor-pointer hover:translate-y-[2px] p-2 text-olive-dark rounded-lg ${
          status === "Reading" && " font-bold  underline"
        }`}
      >
        Currently reading
      </span>
      <span
        onClick={() => {
          setStatus("toBeRead");
          handleStatus("TO_BE_READ");
        }}
        className={`flex items-center text-[14px] cursor-pointer hover:translate-y-[2px] p-2 text-olive-dark rounded-lg ${
          status === "toBeRead" && " font-bold  underline"
        }`}
      >
        T B R
      </span>
    </div>
  );
}

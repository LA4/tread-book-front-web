import React, { useState } from "react";

type inputFieldProps = {
  label?: string;
  placeholder: string;
  handleInputValue: (value: string) => void;
};

export default function InputField({
  label,
  placeholder = "Some things",
  handleInputValue,
}: inputFieldProps) {
  return (
    <div className="flex w-full flex-col  ">
      {label && <label>label</label>}
      <input
        name={label}
        placeholder={placeholder}
        type="text"
        onChange={(e) => {
          handleInputValue(e.target.value);
        }}
        className="bg-white rounded-t-[12px] flex px-4 p-1 border-b-2 border-olive-dark"
      />
    </div>
  );
}

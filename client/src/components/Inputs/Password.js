import React, { useState } from "react";
import Input from "./Default";
import { EyeIcon, EyeOffIcon, LockClosedIcon } from "@heroicons/react/outline";

export default function Email({ onChange, value, color = "DEFAULT" }) {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      className={
        "flex w-full outline-none border-b-2 space-x-4 items-start " +
        (color === "DEFAULT"
          ? "border-gray-light text-gray-light"
          : color === "RED"
          ? "border-red text-red"
          : color === "GREEN"
          ? "border-accent text-accent"
          : "")
      }
    >
      <LockClosedIcon className="w-6 h-6" />
      <Input
        name="email"
        onChange={onChange}
        value={value}
        placeholder="Passwort"
        type={hidden ? "password" : "text"}
      />
      {hidden ? (
        <EyeOffIcon className="w-6 h-6" onClick={() => setHidden(prev => !prev)} />
      ) : (
        <EyeIcon className="w-6 h-6" onClick={() => setHidden(prev => !prev)} />
      )}
    </div>
  );
}

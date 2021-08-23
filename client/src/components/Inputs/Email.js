import React from "react";
import Input from "./Default";
import { UserIcon } from "@heroicons/react/outline";

export default function Email({ onChange, value, color = "DEFAULT" }) {
  return (
    <div
      className={
        "flex w-full outline-none border-b-2 space-x-4 items-start " + (color ===
        "DEFAULT"
          ? "border-gray-light text-gray-light"
          : color === "RED"
          ? "border-red text-red"
          : color === "GREEN"
          ? "border-accent text-accent"
          : "")
      }
    >
      <UserIcon className="w-6 h-6" />
      <Input
        name="email"
        onChange={onChange}
        value={value}
        placeholder="E-Mail"
        type="email"
      />
    </div>
  );
}

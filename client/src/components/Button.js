import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  to = false,
  onClick = () => "",
  type = "",
  text = "",
}) {
  if (to) {
    return (
      <div>
        <Link to={to}>
          <div
            className={
              "text-center text-2xl py-3 mx-7 rounded-full " + (type === "colored" ? "bg-purple text-white" : "text-gray-dark bg-white font-light")
            }
          >
            {text}
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className={
          "text-center text-2xl py-3 mx-7 rounded-full " + (type === "colored" ? "bg-purple text-white" : "text-gray-dark bg-white font-light")
        }
        onClick={onClick}
      >
        {text}
      </div>
    );
  }
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "@authfunctions/react";

import logo from "../images/logo.svg";
import Button from "../components/Button";
import Password from "../components/Inputs/Password";
import Email from "../components/Inputs/Email";

export default function Register() {
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [err, setErr] = useState("");
  return (
    <div className="grid grid-rows-6 fullh overflow-x-hidden">
      <div></div>
      <div className="flex justify-center items-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="text-center text-white mt-4">
        <h3 className="text-xl select-none opacity-0">Easter-Egg</h3>
        <h1 className="text-3xl">Registrieren</h1>
      </div>
      <div className="row-span-3 flex flex-col">
        <svg
          className="wave rotate-180 transform"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
        <form className="flex-1 bg-white space-y-8 p-6 flex justify-center flex-col">
          <Email onChange={(e) => setMail(e.target.value)} value={mail} />
          <Password
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="mt-10">
            <Button
              text="Registrieren"
              type="colored"
              onClick={async () => {
                let [err, res] = await register("", mail, password);
                if (err) setErr(res.errmsg);
              }}
            />
            <p className="text-center mt-7 text-lg">
              Schon einen Account?{" "}
              <Link className="text-green" to="/login">
                Hier Anmelden!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

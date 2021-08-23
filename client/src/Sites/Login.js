import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "@authfunctions/react";

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
        <h1 className="text-3xl">Anmelden</h1>
      </div>
      <div className="row-span-3 flex flex-col">
        <svg
          className="wave"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
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
              text="Anmelden"
              type="colored"
              onClick={async () => {
                let [err, res] = await login(undefined, mail, password);
                if (err) setErr(res.errmsg);
              }}
            />
            <p className="text-center mt-7 text-lg">
              Noch keinen Account?{" "}
              <Link className="text-green" to="/register">
                Hier Registrieren!
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

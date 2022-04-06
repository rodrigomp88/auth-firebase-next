import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("logged in");
        router.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="w-1/3 mx-auto">
      <h2 className="text-center font-mono font-extrabold mt-32 text-2x1">
        Auth NextJs Firebase
        <br /> Registrarse
      </h2>

      <form onSubmit={handleSignup}>
        <div className="my-2 flex flex-col">
          <label className="text-teal-800 font-bold text-lg tracking-wide">
            Correo
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Correo electronico"
            className="bg-none border-2 border-teal-900 p-1 focus:outline-none rounded-xl font-bold text-teal-900"
          />
          <label className="text-teal-800 font-bold text-lg tracking-wide">
            Contraseña
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Contraseña"
            className="bg-none border-2 border-teal-900 p-1 focus:outline-none rounded-xl font-bold text-teal-900"
          />
          <br />
          <button
            className="bg-none border-2 border-teal-900 p-3 focus:outline-none rounded-xl font-bold text-teal-900"
            type="submit"
          >
            Registrarse
          </button>
          <br />
          <Link href="/login">
            <a className="text-center text-blue-700">Ingresar con una cuenta</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

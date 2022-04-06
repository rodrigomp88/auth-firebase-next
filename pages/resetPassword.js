import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

import Link from "next/link";

export default function ResetPassword() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleReset(e) {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email");
        setMessage("Check your email to reset password");
      })
      .catch((error) => {
        console.log(error);
        setError("Email not found");
      });
  }

  return (
    <div className="w-1/3 mx-auto">
      <h2 className="text-center font-mono font-extrabold mt-32 text-2x1">
        Auth NextJs Firebase
        <br /> Recupere su contraseña
      </h2>

      <form onSubmit={handleReset}>
        {message && (
          <p className="text-center text-xs mt-3 text-green-400">{message}</p>
        )}
        {error && (
          <p className="text-center text-xs mt-3 text-green-400">{error}</p>
        )}
        <div className="my-2 flex flex-col">
          <label className="text-teal-800 font-bold text-lg tracking-wide">
            Correo
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Correo electronico"
            className="bg-none border-4 border-teal-900 p-1 focus:outline-none rounded-xl font-bold text-teal-900"
          />
          <br />
          <button
            className="bg-none border-2 border-teal-900 p-3 focus:outline-none rounded-xl font-bold text-teal-900"
            type="submit"
          >
            Enviar
          </button>
          <br />
          <Link href="/login">
            <a className="text-center text-blue-700">Volver a ingresar</a>
          </Link>
        </div>
      </form>
    </div>
  );
}

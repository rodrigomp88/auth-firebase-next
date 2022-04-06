import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useRouter } from "next/router";

import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("logged in");
        router.push("/dashboard");
      })
      .catch((error) => {
        setError(error.message);
      });
  }

  return (
    <div className="w-1/3 mx-auto">
      <h2 className="text-center font-mono font-extrabold mt-32 text-2x1">
        Auth NextJs Firebase
        <br /> Inicie sesion
      </h2>

      <form onSubmit={handleLogin}>
        {error && <p color="danger">{error}</p>}
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
            Ingresar
          </button>
          <br />
          <Link href="/resetPassword">
            <a className="text-center text-blue-700">Recuperar contraseña</a>
          </Link>
          <Link href="/signup">
            <a className="text-center text-blue-700">
              No tenes cuenta? Registrate
            </a>
          </Link>
        </div>
      </form>
    </div>
  );
}

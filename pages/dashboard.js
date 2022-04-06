import React from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Dashboard() {
  const router = useRouter();

  function handleLogout(e) {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        console.log("You are logged out");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h2 className="text-center font-mono font-extrabold mt-32 text-2x1">
        Auth NextJs Firebase
        <br /> Bienvenido
      </h2>
      <div className="w-1/3 mx-auto">
        <form onSubmit={handleLogout}>
          <button
            className="bg-none border-2 border-teal-900 p-3 focus:outline-none rounded-xl font-bold text-teal-900"
            type="submit"
          >
            Cerrar
          </button>
        </form>
      </div>
    </div>
  );
}

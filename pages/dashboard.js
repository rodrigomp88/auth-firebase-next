import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../AuthUserContext";

export default function Dashboard() {
  const router = useRouter();
  const { authUser, loading, signOut } = useAuth();

  useEffect(() => {
    if (!loading && !authUser) router.push("/");
  }, [authUser, loading, router]);

  return (
    <>
      {loading ? (
        <p>Cargando...{loading}</p>
      ) : (
        <>
          <h2 className="text-center font-mono font-extrabold mt-32 text-2x1">
            Auth NextJs Firebase
            <br />{" "}
            {authUser && (
              <div>Bienvenido {authUser?.email}! Estas logeado.</div>
            )}
          </h2>
          <div className="w-1/3 mx-auto">
            <form>
              <button
                onClick={signOut}
                className="bg-none border-2 border-teal-900 p-3 focus:outline-none rounded-xl font-bold text-teal-900"
                type="submit"
              >
                Cerrar
              </button>
            </form>
          </div>
        </>
      )}
    </>
  );
}

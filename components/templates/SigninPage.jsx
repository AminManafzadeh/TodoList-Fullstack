import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, [status]);

  const handleSignIn = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res.error) router.push("/");
  };

  return (
    <div className="flex flex-col w-full max-w-sm sm:max-w-sm lg:max-w-md items-center mx-auto mt-10 p-6 sm:p-8 shadow-custom bg-white rounded-2xl">
      <h3 className="text-slategray mb-12 font-bold text-lg sm:text-xl text-center">
        Login Form
      </h3>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-6 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        type="password"
        placeholder="Password"
      />
      <button
        onClick={handleSignIn}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
      >
        Login
      </button>

      <div className="mt-8 text-grayy flex gap-2 text-sm sm:text-base">
        <p>Create an account</p>
        <Link className="text-bluee" href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SigninPage;

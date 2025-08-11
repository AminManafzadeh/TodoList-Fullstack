import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [router, status]);

  const handleSignup = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    console.log(data);
    if (data.status === "success") {
      router.push("/signin");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm sm:max-w-sm lg:max-w-md items-center mx-auto mt-10 p-6 sm:p-8 shadow-custom bg-white rounded-2xl">
      <h3 className="text-slategray mb-12 font-bold text-lg sm:text-xl text-center">
        Registration Form
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
        onClick={handleSignup}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg transition"
      >
        Register
      </button>

      <div className="mt-8 text-grayy flex gap-2 text-sm sm:text-base">
        <p>Have an account?</p>
        <Link className="text-blue-500 hover:underline" href="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;

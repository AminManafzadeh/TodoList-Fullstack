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
    <div className="flex flex-col max-w-[300px] items-center m-auto mt-[60px] p-[50px] shadow-custom bg-white rounded-[20px]">
      <h3 className="text-slategray mb-[50px] font-bold">Login Form</h3>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-[30px] input"
        type="text"
        placeholder="Email"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-[30px] input"
        type="password"
        placeholder="password"
      />
      <button onClick={handleSignIn} className="btn cursor-pointer">
        Login
      </button>
      <div className="mt-[50px] text-grayy flex">
        <p>Create an account</p>
        <Link className="text-bluee" href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  );
}

export default SigninPage;

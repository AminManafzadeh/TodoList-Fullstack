import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
    <div className="flex flex-col max-w-[300px] items-center m-auto mt-[60px] p-[50px] shadow-custom bg-white rounded-[20px]">
      <h3 className="text-slategray mb-[50px] font-bold">Registeration Form</h3>

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
      <button onClick={handleSignup} className="btn cursor-pointer">
        Register
      </button>
      <div className="mt-[50px] text-grayy flex">
        <p>Have an account?</p>
        <Link className="text-bluee" href="/signin">
          Sign In
        </Link>
      </div>
    </div>
  );
}

export default SignupPage;

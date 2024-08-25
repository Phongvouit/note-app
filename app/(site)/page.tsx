"use client";

import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Login() {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (session?.status === "authenticated") {
      router.push("/home");
      toast.success("Logged in!")
    }
  }, [session?.status, router]);

  const handleSignIn = () => {
    signIn("google", { redirect: false })
      .then((callback) => {
        if (callback?.error) {
          toast.error("Invalid credentials");
        }

        if (callback?.ok && !callback?.error) {
          toast.success("Logged in!");
        }
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-1/3 mx-auto">
        <div className="w-full py-8 text-center">
          <Image
            alt="logo"
            height="400"
            width="400"
            className="mx-auto w-auto"
            src="/images/logo.png"
          />
        </div>
        <div className="w-full">
          <button
            onClick={handleSignIn}
            className="
          hover:shadow-blue-600/40 
          rounded-md w-full 
          bg-gradient-to-r 
          from-blue-700 
          to-blue-600 
          px-8 
          py-3 
          font-bold 
          text-white 
          transition-all 
          hover:opacity-90 
          hover:shadow-lg"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

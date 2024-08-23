import Image from "next/image";

export default function Login() {
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
          <button className="hover:shadow-blue-600/40 rounded-md w-full bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

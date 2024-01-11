import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-gray-900 min-h-screen">
      <div className="bg-gray-700 rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">
          Welcome Picture Storage Space
        </h2>
        <p className=" text-white mb-6 text-center text-lg">
          Sign in to upload and save your favorite photos.
        </p>
        <AuthForm />
      </div>
    </main>
  );
}

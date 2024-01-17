"use client";
import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

const AuthForm = () => {
  const [isNewUser, setIsNewUser] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSigningUp, setIsSigningUp] = useState(false);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    setIsSigningIn(true);
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log({ error, data });

    if (!error) {
      router.push("/photos");
    } else {
      setIsSigningIn(false);
    }
  };

  const handleSingUp = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (!error) {
      setIsSigningUp(true);
    }
    console.log({ data, error });
  };

  let signInMessage = "Sign In";

  if (isSigningIn) {
    signInMessage = "Signing In";
  } else if (isNewUser) {
    signInMessage = "Sign Up";
  }

  const signUpMessage = (
    <p className="text-center text-white">
      Email sent! Check your email to confrim sign up.
    </p>
  );

  return (
    <form
      onSubmit={isNewUser ? handleSingUp : handleLogin}
      className="space-y-8"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="apperance-none rounded relative block w-full px-3 py-2 border border-gray-900"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="apperance-none rounded relative block w-full px-3 py-2 border border-gray-900"
        placeholder="Password"
      />
      <button
        className="group rounded relative w-full flex justify-center px-4 py-3 text-white border border-transparent bg-indigo-400 hover:bg-indigo-600 transition-all"
        type="submit"
      >
        {signInMessage}
      </button>
      <p className="text-center text-white">
        {isNewUser ? (
          <>
            Already have an account?{" "}
            <button
              className="text-indigo-400 hover:text-indigo-600  transition-all"
              type="button"
              onClick={() => setIsNewUser(false)}
            >
              Sign In
            </button>
          </>
        ) : (
          <>
            Dont have an account?{" "}
            <button
              className="text-indigo-400 hover:text-indigo-600"
              type="button"
              onClick={() => setIsNewUser(true)}
            >
              Sign Up
            </button>
          </>
        )}
      </p>

      {isSigningUp && signUpMessage}
    </form>
  );
};

export default AuthForm;

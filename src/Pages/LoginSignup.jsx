import React, { useState } from "react";

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state === "Sign Up" ? "Signing Up..." : "Logging In...");
    console.log(formData);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-pink-100">
      <div className="bg-white w-[400px] rounded-xl shadow-lg p-8 flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-6">{state}</h1>

        <form
          onSubmit={submitHandler}
          className="flex flex-col w-full gap-4 text-base"
        >
          {state === "Sign Up" && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={changeHandler}
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            />
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md font-medium hover:bg-red-600 transition"
          >
            Continue
          </button>
        </form>

        <div className="mt-4 text-sm text-gray-600">
          {state === "Sign Up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setState("Login")}
                className="text-red-500 cursor-pointer font-semibold hover:underline"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Don’t have an account?{" "}
              <span
                onClick={() => setState("Sign Up")}
                className="text-red-500 cursor-pointer font-semibold hover:underline"
              >
                Sign up here
              </span>
            </p>
          )}
        </div>

        <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
          <input type="checkbox" required className="mt-0.5" />
          <p>
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

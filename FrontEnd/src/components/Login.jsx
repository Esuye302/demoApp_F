import React from "react";
import { useState } from "react";

const Login = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
setMessage('')
setError('')
    const url = "http://16.16.201.23:80/login";
    const config = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    try {
      const res = await fetch(url, config);
      const data = await res.json();
      if (res.ok) {
        // ✅ Success
        setMessage(data.message || "Login successful");
        setFormData({ email: "", password: "" });
      } else {
        // ❌ Error sent by backend
        setError(data.error || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("error");
    }
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      {message && (
        <p className="mx-auto my-3 text-2xl bg-green-600 text-white w-fit px-4 py-2 rounded">
          {message}
        </p>
      )}
      {error && (
        <p className="mx-auto my-3 text-2xl bg-red-500 text-white w-fit px-4 py-2 rounded">
          {error}
        </p>
      )}
      <form
        onSubmit={handleSubmit}
        className="mt-3 max-w-md mx-auto p-4 border rounded shadow space-y-4"
      >
        <h2 className="text-xl font-bold">Login</h2>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

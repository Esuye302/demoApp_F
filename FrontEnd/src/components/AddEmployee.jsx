import React from "react";
import { useState } from "react";

const AddEmployee = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    password: "",
    email: "",
    last_name: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = " http://16.16.201.23:4000/add-employee";
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
        });
      })
      .catch((err) => {
        console.error("Error:", err);
        setError(err.error);
      });
      
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
        className="max-w-md mx-auto p-4 mt-4 border rounded shadow space-y-4"
      >
        <h2 className="text-xl font-bold">Register</h2>

        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={formData.first_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={formData.last_name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

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
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </>
  );
};

export default AddEmployee;

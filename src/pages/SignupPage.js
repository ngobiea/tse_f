import { useContext } from "react";

import AppContext from "../context/app";

const SignupPage = () => {
  const { name, setName, email, setEmail, password, setPassword, signup } =
    useContext(AppContext);
  return (
    <form
      className="flex justify-center h-screen flex-col mx-64"
      onSubmit={signup}
    >
      <h2 class="text-4xl font-extrabold  text-black">Login to your account</h2>
      <div className="mb-6">
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
          value={name}
        />
      </div>
      <div className="mb-6">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Email address"
          required
          value={email}
        />
      </div>
      <div className="mb-6">
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Password"
          required
          value={password}
        />
      </div>
      <div className="flex items-start mb-6"></div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default SignupPage;

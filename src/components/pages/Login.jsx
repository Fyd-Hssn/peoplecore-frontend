import React from 'react';
import limeLogo from '../../images/limepng.png';

function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5">
      <div className="flex items-center justify-center mb-2">
        <a href="/" className="flex items-center">
          <img src={limeLogo} alt="Lime Logo" className="h-10 mr-2" />
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-600 hover:text-blue-700 md:p-0">Lime</h1>
        </a>
      </div>
      <h2 className="text-lg font-medium text-center text-gray-900 dark:text-gray-600 mb-6">
        Log in to your account
      </h2>
      <form className="w-full max-w-sm">
        <div className="mb-6">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
            Enter email
          </label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-340 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@domain.com"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-600">
            Enter password
          </label>
          <input
            type="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-340 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder='●●●●●●'
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-340 p-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          style={{ color: '#EFEFEF' }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;

import {Link} from "react-router-dom";
import {LockClosedIcon} from "@heroicons/react/24/solid";
import {useState} from "react";
import axiosClient from "../axios.js";
import {useStateContext} from "../contexts/ContextProvider.jsx";

export default function Signup() {
  const {setCurrentUser, setUserToken} = useStateContext();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState({__html: ""});

  const onSubmit = (ev) => {
    ev.preventDefault();
    setError({__html: ''});

    axiosClient.post('/signup', {
      name: fullName,
      email,
      password,
      password_confirmation: passwordConfirmation
    })
      .then(({data}) => {
        setCurrentUser(data.user);
        setUserToken(data.token);
      })
      .catch((error) => {
        if (error.response) {
          const finalErrors = Object.values(error.response.data.errors).reduce((accum, next) => [...next, ...accum], [])
          console.log(finalErrors)
          setError({__html: finalErrors.join('<br>')})
        }
        console.error(error)
      });
  };


  return (
    <>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Signup for free
      </h2>
      <p className="mt-10 text-center text-sm text-gray-500">
        or {" "}
        <Link
          to="/login"
          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
        >
          Login with your account
        </Link>
      </p>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit} className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="full-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Full Name
            </label>
            <div className="mt-2">
              <input
                id="full-name"
                name="name"
                type="text"
                required
                value={fullName}
                onChange={(ev) => setFullName(ev.target.value)}
                placeholder="Full Name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email-address"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                placeholder="Email Address"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                placeholder="Password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password-confirmation"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password Confirmation
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password-confirmation"
                name="password_confirmation"
                type="password"
                required
                value={passwordConfirmation}
                onChange={(ev) => setPasswordConfirmation(ev.target.value)}
                placeholder="Password Confirmation"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                aria-hidden="true"
              />
            </span>
              Signup
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

import { useState } from "react";
import { Mail, KeyRound } from "lucide-react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import * as Yup from 'yup';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Aos from "aos";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../redux/userSlice";
import { ErrorMessage, Formik, Form, Field } from "formik";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const SignIN = () => {
  const [focus, setFocus] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string().required("password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const auth = getAuth();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      const User = userCredential.user;
      console.log(User);

      dispatch(
        setUser({
          userName: User.displayName,
          email: User.email,
        }),
      );

      Swal.fire({
        title: "Successful signin",
        text: `Hello ${User.displayName}`,
        icon: "success",
        confirmButtonColor: "#730073",

         background: "transparent",
                      customClass: {
                        popup: `
            backdrop-blur-xl 
            bg-white/70 dark:bg-black/40 
            border border-white/20 dark:border-white/10 
            rounded-[2rem] shadow-2xl
          `,
           title: "text-gray-900 dark:text-white"},

      });
      resetForm();
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5f496c] overflow-hidden relative dark:bg-black">
      {/* Background Shapes */}
      <div className="absolute w-[350px] h-[350px] bg-indigo-300 opacity-30 blur-3xl top-[-100px] left-[-80px] rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] bg-violet-300 opacity-30 blur-3xl bottom-[-100px] right-[-80px] rounded-full"></div>

      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-indigo-200 to-violet-300 opacity-40 blur-2xl rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-pulse"></div>

      {/* Card */}
      <div data-aos="flip-left">
        <div className="relative w-[300px] md:w-[400px] p-8 backdrop-blur-2xl bg-white/40 border border-white/50 shadow-2xl rounded-[35px] transition duration-500 dark:bg-black dark:border-purple-900">
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#381a50] to-[#e353e3]  rounded-[40%_60%_70%_30%] flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">✦</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-bold bg-gradient-to-r from-[#730073] to-[#f804bf] bg-clip-text text-transparent text-center text-2xl dark:bg-none dark:text-purple-500 ">
            Welcome back
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Sign in to continue
          </p>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignInSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, handleBlur }) => (
              <Form className="space-y-5">
                {/* email */}

                <div className="relative ">
                  <div className="absolute left-3 top-6 -translate-y-1/2 text-gray-400 dark:text-purple-500">
                    <Mail size={20} />
                  </div>
                  <label
                    htmlFor="email"
                    className={`absolute left-10 transition-all text-gray-500 text-sm dark:text-purple-500
              ${
                focus === "email" || values.email
                  ? "top-1 text-xs text-indigo-600"
                  : "top-3"
              }`}
                  >
                    email
                  </label>

                  <Field
                    id="email"
                    name="email"
                    onFocus={() => setFocus("email")}
                    onBlur={(e) => {
                      handleBlur(e);
                      setFocus(null);
                    }}
                    // placeholder="Please, enter your name"
                    className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-800 font-bold text-sm ml-5"
                  />
                </div>

                {/* password */}

                <div className="relative">
                  <div className="absolute left-3 top-6 -translate-y-1/2 text-gray-400 dark:text-purple-500">
                    <KeyRound size={20} />
                  </div>

                  <label
                    htmlFor="password"
                    className={`absolute left-10 transition-all text-gray-500 text-sm dark:text-purple-500
              ${
                focus === "password" || values.password
                  ? "top-1 text-xs text-indigo-600"
                  : "top-3"
              }`}
                  >
                    password
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type="password"
                    onFocus={() => setFocus("password")}
                    onBlur={(e) => {
                      handleBlur(e);
                      setFocus(null);
                    }}
                    // placeholder="Please, enter your passwoed"
                    className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-800 font-bold text-sm ml-5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl  bg-gradient-to-r from-[#381a50] to-[#e353e3] text-white text-sm font-medium shadow-md hover:scale-105 active:scale-95 transition duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <ClipLoader
                        color="#ffffff"
                        size={18}
                        speedMultiplier={0.8}
                      />
                      <span> Signing in...</span>
                    </>
                  ) : (
                    "Sign in"
                  )}
                </button>
                <p className="text-center text-sm text-gray-600 mt-6">
                  Don't have an account,
                  <Link to="/register">
                    <span className="text-[#730073] ml-1 cursor-pointer hover:underline font-bold dark:text-purple-500">
                      Sign up
                    </span>
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignIN;

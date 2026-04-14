import * as Yup from 'yup';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import { CircleUser, KeyRound, Mail, RectangleEllipsis } from "lucide-react";

const Register = () => {
  const navigate = useNavigate();
  const [focus, setFocus] = useState(null);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);
  // تهيئه مكتبه فورميك

  const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("userName is required *"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password is too short - should be 6 chars minimum")
      .required("password is required"),
    repassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords do not match")
      .required("Re-password is required"),
  });

  // new user

  const handleSubmit = async (values, { resetForm }) => {
    const auth = getAuth();

    try {
      const User = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password,
      );
      await updateProfile(auth.currentUser, {
        displayName: values.name,
      });
      console.log(User);
      resetForm();
      Swal.fire({
        title: "Successful registration",
        text: `Hello ${values.name}`,
        icon: "success",
         background: "transparent",
                      customClass: {
                        popup: `
            backdrop-blur-xl 
            bg-white/70 dark:bg-black/40 
            border border-white/20 dark:border-white/10 
            rounded-[2rem] shadow-2xl
          `,
           title: "text-gray-900 dark:text-white"},

        confirmButtonColor: "#730073",
        timer: 3000,
      }).then(() => {
        navigate("/sign");
      });
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#5f496c]  overflow-hidden relative dark:bg-black">
      {/* Background Shapes */}
      <div className="absolute w-[350px] h-[350px] bg-indigo-300 opacity-30 blur-3xl top-[-100px] left-[-80px] rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] bg-violet-300 opacity-30 blur-3xl bottom-[-100px] right-[-80px] rounded-full"></div>
      <div className="absolute w-[500px] h-[500px] bg-gradient-to-br from-indigo-200 to-violet-300 opacity-40 blur-2xl rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-pulse"></div>
      <div data-aos="zoom-in">
        <div className="relative  w-[300px] md:w-[400px] p-8 backdrop-blur-2xl bg-white/40 border border-white/50 shadow-2xl rounded-[35px] transition duration-500 dark:bg-black dark:border-purple-900">
          {/* Illustration */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-[#381a50] to-[#e353e3]  rounded-[40%_60%_70%_30%] flex items-center justify-center shadow-lg">
              <span className="text-white text-lg">✦</span>
            </div>
          </div>

          {/* Title */}
          <h2 className="font-bold bg-gradient-to-r from-[#730073] to-[#f804bf] bg-clip-text text-transparent text-center text-2xl dark:bg-none dark:text-purple-500">
            Welcome
          </h2>
          <p className="text-center text-sm text-gray-600 mb-6">
            Register to continue
          </p>

          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              repassword: "",
            }}
            validationSchema={RegisterSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, values, handleBlur }) => (
              <Form className="space-y-5">
                <div className="relative ">
                  <div className="absolute left-3 top-6 -translate-y-1/2 text-gray-400 dark:text-purple-500">
                    <CircleUser size={20} />
                  </div>

                  <label
                    htmlFor="name"
                    className={`absolute left-10 transition-all text-gray-500 text-sm dark:text-purple-500
              ${
                focus === "name" || values.name
                  ? "top-1 text-xs text-indigo-600"
                  : "top-3"
              }`}
                  >
                    name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    onFocus={() => setFocus("name")}
                    onBlur={(e) => {
                      handleBlur(e);
                      setFocus(null);
                    }}
                    // placeholder="Please, enter your name"
                    className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-800 font-bold text-sm ml-5"
                  />
                </div>

                {/* email */}

                <div className="relative">
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
                    className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950"
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

                {/* repassword */}
                <div className="relative">
                  <div className="absolute left-3 top-6 -translate-y-1/2 text-gray-400 dark:text-purple-500">
                    <RectangleEllipsis size={20} />
                  </div>

                  <label
                    htmlFor="repassword"
                    className={`absolute left-10 transition-all text-gray-500 text-sm dark:text-purple-500
              ${
                focus === "repassword" || values.repassword
                  ? "top-1 text-xs text-indigo-600 "
                  : "top-3"
              }`}
                  >
                    repassword
                  </label>
                  <Field
                    id="repassword"
                    name="repassword"
                    type="password"
                    onFocus={() => setFocus("repassword")}
                    onBlur={(e) => {
                      handleBlur(e);
                      setFocus(null);
                    }}
                    // placeholder="Please, enter your passwoed"
                    className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950"
                  />
                  <ErrorMessage
                    name="repassword"
                    component="div"
                    className="text-red-800 font-bold text-sm ml-5"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl  bg-gradient-to-r from-[#381a50] to-[#e353e3] text-white text-sm font-medium shadow-md hover:scale-105 active:scale-95 transition duration-300"
                >
                  {isSubmitting ? "Registering......" : "register"}
                </button>
                <p className="text-center text-sm text-gray-600 mt-6">
                  have an account,
                  <Link to="/sign">
                    <span className="text-[#730073] ml-1 cursor-pointer hover:underline font-bold  dark:text-purple-500">
                      Sign in
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

export default Register;

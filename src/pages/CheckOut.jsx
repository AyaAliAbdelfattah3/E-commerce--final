import * as Yup from 'yup';
import { ErrorMessage, Formik, Form, Field } from "formik";
import { master, visa } from "../assets";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    country: "Egypt",
    apartment: "",
    paymentMethod: "cash",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("firstName is required *"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    city: Yup.string().required("City is required"),
    paymentMethod: Yup.string().required("Please select a payment method."),

    phone: Yup.string()
      .min(10, "Invalid phone number")
      .required("Phone is required"),
  });

  const handleSubmit = (values) => {
    console.log(values);
    alert("Order saved 🎉");
  };
  const proDUcts = useSelector((state) => state.productsReducer.products);
  const totalAmount = proDUcts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const navigate = useNavigate();

  return (
    <div className="min-h-screen  bg-[#5f496c]  overflow-hidden relative dark:bg-black">
      {/* Background Shapes */}
      <div className="absolute w-[350px] h-[350px] bg-indigo-300 opacity-30 blur-3xl top-[-100px] left-[-80px] rounded-full"></div>
      <div className="absolute w-[300px] h-[300px] bg-violet-300 opacity-30 blur-3xl bottom-[-100px] right-[-80px] rounded-full"></div>
      <div className="absolute w-[300px] h-[200px] bg-gradient-to-br from-indigo-200 to-violet-300 opacity-40 blur-2xl rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-pulse"></div>

      <div className="">
        <h2 className="font-bold bg-gradient-to-r from-[#c9a6c9] to-[#dac9d6] bg-clip-text text-transparent text-center text-3xl underline dark:bg-none dark:text-purple-500 mt-7">
          {" "}
          Checkout
        </h2>
      </div>

      <div className="container mx-auto grid lg:grid-cols-[3fr_2fr] gap-10 px-3 items-start ">
        <div className="backdrop-blur-2xl bg-white/40 border border-white/50 shadow-2xl rounded-[35px] mt-[50px] mb-10 p-10 transition duration-500 dark:bg-black dark:border-purple-900">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form className="space-y-4">
              {/* Country */}
              <Field
                name="country"
                className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950 placeholder:text-gray-800 "
                placeholder="country"
              />

              {/* First + Last name */}
              <div className="grid grid-cols-2 gap-3">
                <Field
                  name="firstName"
                  placeholder="First name "
                  className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950 placeholder:text-gray-800 "
                />
                <Field
                  name="lastName"
                  placeholder="Last name"
                  className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950 placeholder:text-gray-800"
                />
              </div>

              <ErrorMessage
                name="lastName"
                component="p"
                className="text-[#7b0606] text-lg"
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-[#7b0606] text-lg"
              />

              {/* Address */}
              <Field
                name="address"
                placeholder="Address"
                className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950 placeholder:text-gray-800 "
              />
              <ErrorMessage
                name="address"
                component="p"
                className="text-[#7b0606] text-lg"
              />

              {/* Apartment */}
              <Field
                name="apartment"
                placeholder="Apartment"
                className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950 placeholder:text-gray-800 "
              />

              {/* City + Postal */}
              <div className="grid grid-cols-2 gap-3">
                <Field
                  name="city"
                  placeholder="city"
                  className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950 placeholder:text-gray-800 "
                />
                <Field
                  name="postalCode"
                  placeholder="Postal code"
                  className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950 placeholder:text-gray-800 "
                />
              </div>
              <ErrorMessage
                name="city"
                component="p"
                className="text-[#7b0606] text-lg"
              />

              {/* Phone */}
              <Field
                name="phone"
                placeholder="Phone"
                className="w-full pl-10 pr-4 pt-5 pb-2 rounded-xl bg-white/50 border border-white/40 focus:outline-none focus:ring-2 focus:ring-[#730073] text-sm  dark:bg-black dark:border-purple-900 dark:focus:ring-purple-950 placeholder:text-gray-800 "
              />
              <ErrorMessage
                name="phone"
                component="p"
                className="text-[#7b0606] text-lg "
              />

              {/* Submit */}
              <Link to="/">
                <button
                  type="submit"
                  className="w-full bg-purple-900 text-white p-3 rounded-xl hover:bg-purple-700 mt-10"
                >
                  Continue to shipping
                </button>
              </Link>

              <div>
                <h1 className="text-xl font-bold underline text-[#b60e8f] ">
                  Payment
                </h1>
                <p>All transactions are secure and encrypted</p>
              </div>
              <div className="flex items-center gap-2">
                <Field
                  type="radio"
                  id="cash"
                  name="paymentMethod"
                  value="cash"
                  className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="cash" className="cursor-pointer font-medium">
                  Cash on Delivery (COD)
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Field
                  type="radio"
                  id="card"
                  name="paymentMethod"
                  value="card"
                  className="w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor="card"
                  className="cursor-pointer flex items-center gap-2 font-medium"
                >
                  Card
                  <div className="flex gap-1 bg-white/50 p-1 rounded-lg">
                    <img src={visa} alt="visa" className="h-4" />
                    <img src={master} alt="master" className="h-4" />
                  </div>
                </label>
              </div>
            </Form>
          </Formik>
        </div>

        <div className="sticky backdrop-blur-2xl bg-white/40 border border-white/50 shadow-2xl rounded-[35px] mt-[80px] p-10 transition duration-500 dark:bg-black dark:border-purple-900 ">
          {proDUcts.map((item) => (
            <div key={item.id} className="group relative flex items-center p-2">
              <div className="flex items-center gap-4">
                <img
                  className="h-[70px] w-[70px] object-contain rounded-lg bg-gray-50 p-2 dark:bg-black"
                  src={item.image}
                  alt={item.title}
                />

                <span className="font-bold text-[#340c4b] dark:text-white">
                  quantity:{item.quantity}
                </span>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-around">
            <h3 className=" font-bold bg-gradient-to-r from-[#730073] to-[#f804bf] bg-clip-text text-transparent dark:text-purple-300">
              Shipping
            </h3>
            <p className="bg-green-200 text-green-700/90 font-bold rounded-lg p-1">
              Free Shipping
            </p>
          </div>

          <div className="flex items-center justify-around">
            <h3 className="font-bold text-xl bg-gradient-to-r from-[#730073] to-[#f804bf] bg-clip-text text-transparent dark:text-purple-300">
              Total Amount
            </h3>
            <p className="font-bold text-lg dark:text-white">
              ${totalAmount.toFixed(2)}
            </p>
          </div>

          <button
            type="button"
            className="w-full bg-purple-900 text-white p-3 rounded-xl hover:bg-purple-700 mt-10"
            onClick={() => {
              Swal.fire({
                title: "thank you for using our website 😊",
                icon: "success",
                confirmButtonText: "Ok",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate("/");
                }
              });
            }}
          >
            Order confirmation
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;

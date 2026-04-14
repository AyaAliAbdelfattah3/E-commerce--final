import { MailOpen, MapPin, PhoneCall } from "lucide-react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import Swal from "sweetalert2";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4pri9i2",
        "template_shyfnhr",
        form.current,
        "dIZ-L0wVDZJsXABy-",
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title:
              "Your message has been sent successfully! Thank you for contacting us.",
            icon: "success",
            draggable: true,
          });

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "An error occurred during transmission, please try again.",
          });
        },
      );
  };
  return (
    <>
      <div>
        <div className="relative py-20 ">
          <h1 className="text-5xl font-bold text-[#340c4b] underline text-center  mt-11 dark:text-purple-700">
            Contact Us
          </h1>
          <p className="font-semibold text-lg text-gray-800 text-center dark:text-gray-400 mt-7">
            Please use the below form. You can also call customer service on
            +2010123456.
          </p>
        </div>

        <div className=" container mx-auto h-[700px] overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3429.4387361094327!2d31.790944324962386!3d30.73417538556393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1774955905509!5m2!1sar!2seg"
            width="100%"
            height="650"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className=" bg-gradient-to-br from-[#433454] via-[#f6dbdb] to-[#4a2d6b] bg-white/40 backdrop-blur-lg min-h-screen dark:bg-none dark:bg-black"
        >
          <div className="container mx-auto  grid lg:grid-cols-[2fr_1fr] gap-10 p-7 items-center">
            <div className=" mt-[50px] bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 rounded-2xl dark:bg-black dark:border-purple-900">
              {" "}
              <div>
                <h1 className="font-bold text-2xl text-[#340c4b] font-serif text-center mb-3 dark:text-white underline">
                  Get In Touch
                </h1>
                <label className="text-sm mb-2 text-[#340c4b] font-medium dark:text-white">
                  Your Name :
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  id="name"
                  name="name"
                  required
                  className="w-full my-2 bg-[#9d85a2] py-4 px-3 rounded-md text-white text-sm 
                      focus:ring-2  focus:ring-[#4a2d6b] outline-none transition
                     duration-20 placeholder-white  dark:bg-black border  border-purple-900"
                />
              </div>
              <div>
                <label className="text-sm mb-2 text-[#340c4b] font-medium dark:text-white">
                  Your Email :
                </label>
                <input
                  type="text"
                  placeholder="Enter Your email"
                  id="email"
                  name="email"
                  required
                  className="w-full my-2 bg-[#9d85a2] py-4 px-3 rounded-md text-white text-sm 
                      focus:ring-2  focus:ring-[#4a2d6b] outline-none transition
                     duration-20 placeholder-white  dark:bg-black border border-purple-900"
                />
              </div>
              <div className="my-4">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message here... "
                  className="w-full p-4 rounded-lg  bg-[#9d85a2]  text-white focus:outline-none
                   focus:ring-2 focus:ring-[#4a2d6b] placeholder-white  dark:bg-black border  border-purple-900"
                ></textarea>
              </div>
              {/* button */}
              <button className="w-full px-6 py-3 bg-[#9c3584] rounded-2xl text-white font-bold text-lg dark:bg-purple-950">
                Send Message
              </button>
            </div>
            <div className=" mt-[50px] bg-white/30 backdrop-blur-xl border border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] p-8 rounded-2xl h-fit dark:bg-black dark:border-purple-900">
              <h1 className="font-bold text-2xl text-[#340c4b] font-serif text-center mb-10  dark:text-purple-500/80 underline ">
                Contacts Information
              </h1>
              <div className="flex flex-col gap-6 max-w-fit mx-auto">
                <div className="flex  items-center gap-1 ">
                  <MapPin
                    className="text-[#662da8] shrink-0 dark:text-purple-500"
                    size={30}
                  />
                  <p className="font-semibold text-gray-800 leading-tight dark:text-white">
                    New Cairo - Fifth Settlement - Capital Mall behind the court
                  </p>
                </div>

                <div className="flex items-center  gap-1 ">
                  <MailOpen
                    className="text-[#662da8] shrink-0 dark:text-purple-500"
                    size={30}
                  />
                  <p className="font-semibold text-gray-800 leading-tight dark:text-white">
                    info@AyaShop.com
                  </p>
                </div>
                <div className="flex items-center  gap-1 ">
                  <PhoneCall
                    className="text-[#662da8] shrink-0 dark:text-purple-500"
                    size={30}
                  />
                  <p className="font-semibold text-gray-800 leading-tight dark:text-white">
                    +2-01001234567
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center mt-7 gap-4 ">
                <FaInstagram
                  className="p-3 rounded-xl bg-white/5 border border-white/30 text-[#ab0286] hover:text-[#ab0286] hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer dark:text-purple-500"
                  size={55}
                />
                <CiFacebook
                  className="p-3 rounded-xl bg-white/5 border border-white/30 text-[#ab0286] hover:text-[#ab0286] hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer dark:text-purple-500"
                  size={55}
                />

                <FaWhatsapp
                  className="p-3 rounded-xl bg-white/5 border border-white/30 text-[#ab0286] hover:text-[#ab0286] hover:bg-white/20 hover:-translate-y-1 transition-all duration-300 cursor-pointer dark:text-purple-500"
                  size={55}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactUs;

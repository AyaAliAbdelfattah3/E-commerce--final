import { useDispatch, useSelector } from "react-redux";
import {
  clearAllItems,
  deCrement,
  deleteItem,
  inCrement,
} from "../redux/productSlice";
import { LockKeyhole } from "lucide-react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const proDUcts = useSelector((state) => state.productsReducer.products);
  const user = useSelector((state) => state.userReducer.userInfo);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlecheckout = () => {
    if (user) {
      navigate("/check");
    } else {
      navigate("/sign");
    }
  };

  // حساب الاجمالى
  const totalAmount = proDUcts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  return (
    <div className="bg-[#d5dbe3] text-zinc-900 selection:bg-purple-200 min-h-screen py-[120px] dark:bg-black">
      <div className="container mx-auto grid lg:grid-cols-[3fr_1fr] gap-10 px-3">
        <div className="">
          {proDUcts.length > 0 ? (
            <div className="flex flex-col gap-6 ">
              {proDUcts.map((item) => (
                <div
                  key={item.id}
                  className="group relative flex items-center gap-8 p-7 
                                bg-purple-700/20 backdrop-blur-sm border border-purple-400/50 
                                rounded-3xl transition-all duration-500 hover:bg-purple-900/50
                                dark:bg-black
                                
                                shadow-[8px_8px_20px_rgba(0,0,0,0.05),-8px_-8px_20px_rgba(255,255,255,0.9)]
                                hover:shadow-[12px_12px_30px_rgba(0,0,0,0.08),-12px_-12px_30px_rgba(255,255,255,1)]
                                hover:-translate-y-1 
                                dark:shadow-[0_0_15px_rgba(0,0,0,0.7)] dark:border dark:border-purple-900         
                                "
                >
                  <div>
                    <img
                      className="h-[100px] w-[250px] object-contain rounded-lg bg-gray-50 p-2 dark:bg-black"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>

                  {/* تفاصيل المنتجات */}
                  <div>
                    <h3 className="text-base font-semibold  italic text-[#730073] line-clamp-1 dark:text-purple-400">
                      {item.title}
                    </h3>
                    <p className="text-gray-900 text-xs line-clamp-2 mt-1 dark:text-white ">
                      {item.description}
                    </p>
                    <span className="text-[#b60e8f] text-xs italic dark:text-purple-500">
                      {item.category}
                    </span>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-indigo-600 font-bold text-sm dark:text-white">
                        price :{item.price}$
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <button
                        onClick={() => dispatch(deCrement(item.id))}
                        className="bg-[#730073] text-white rounded-full w-7 h-7 flex items-center justify-center  hover:bg-white hover:text-[#730073] transition-all duration-200 dark:bg-black dark:text-white border border-transparent dark:border-purple-900"
                      >
                        -
                      </button>

                      <span className="font-bold text-[#340c4b] dark:text-white">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => dispatch(inCrement(item.id))}
                        className="bg-[#730073] text-white rounded-full w-7 h-7 flex items-center justify-center hover:bg-white hover:text-[#730073] transition-all duration-200 dark:bg-black dark:text-white border border-transparent dark:border-purple-900"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      const isDark =
                        document.documentElement.classList.contains("dark");

                      Swal.fire({
                        title: "Are you sure?",
                        text: "Once deleted, you will not be able to recover this item!",
                        icon: "warning",

                        showCancelButton: true,
                        confirmButtonText: "Delete",
                        cancelButtonText: "Cancel",

                        confirmButtonColor: "#ef4444",
                        cancelButtonColor: isDark ? "#288e1b" : "#d1d5db",

                        color: isDark ? "#ffffff" : "#340c4b",
                        iconColor: "#ef4444",
                        background: isDark ? "#40335E" : "#fffff",
                      }).then((result) => {
                        if (result.isConfirmed) {
                          dispatch(deleteItem(item.id));

                          Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success",
                            iconColor: "#22c55e",

                            color: isDark ? "#ffffff" : "#340c4b",
                            background: isDark ? "#40335E" : "#fffff",
                          });
                        }
                      });
                    }}
                    className="text-red-700 text-md font-bold italic hover:text-red-900 transition-all duration-200 underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <h2 className="text-center text-3xl font-semibold text-red-700 mt-[25%]">
                🛒 No products in cart
              </h2>
            </div>
          )}

          <div className="text-center mt-8">
            <button
              onClick={() => {
                Swal.fire({
                  title: "Are you sure?",
                  text: "You are about to delete all products",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "Yes, delete it!",
                  background: "transparent",

                  customClass: {
                    popup: `
        backdrop-blur-xl 
        bg-white/70 dark:bg-black/40 
        border border-white/20 dark:border-white/10 
        rounded-[2rem] shadow-2xl
      `,
                    title: "text-gray-900 dark:text-white",
                    htmlContainer: "text-purple-950 dark:text-gray-300",
                  },
                }).then((result) => {
                  if (result.isConfirmed) {
                    dispatch(clearAllItems());

                    Swal.fire({
                      title: "Deleted!",
                      icon: "success",
                      background: "transparent",
                      customClass: {
                        popup: `
            backdrop-blur-xl 
            bg-white/70 dark:bg-black/40 
            border border-white/20 dark:border-white/10 
            rounded-[2rem] shadow-2xl
          `,
                        title: "text-gray-900 dark:text-white",
                      },
                    });
                  }
                });
              }}
              className="bg-red-600 p-2 rounded-xl text-white font-bold"
            >
              Clear All Item{" "}
            </button>
          </div>
        </div>

        <div className="relative w-full">
          <div
            className="sticky bg-[#f8f9fa] rounded-2xl p-8 border border-white/50 dark:bg-black
     shadow-[5px_10px_20px_rgba(180,150,255,0.2),-10px_-10px_20px_rgba(150,120,220,0.7)]"
          >
            <h1 className="font-bold text-center p-3  mb-6 text-[#340c4b]  text-2xl tracking-tight border-b border-zinc-600/50 dark:text-purple-500">
              Order Summary
            </h1>
            <span className="bg-slate-800 "></span>
            <div className="space-y-6">
              <div className="flex items-center justify-around px-2">
                <h3 className="font-bold bg-gradient-to-r from-[#730073] to-[#f804bf] bg-clip-text text-transparent dark:text-none dark:text-purple-300">
                  SubTotal
                </h3>
                <p className="font-bold text-lg dark:text-white">
                  ${totalAmount.toFixed(2)}
                </p>
              </div>
              <div className="flex items-center justify-around">
                <h3 className="ml-7 font-bold bg-gradient-to-r from-[#730073] to-[#f804bf] bg-clip-text text-transparent dark:text-purple-300">
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
            </div>
            <button
              onClick={handlecheckout}
              className="w-full mt-8 py-5 bg-gradient-to-r from-[#730073] via-[#9c3584] to-[#730073] 
                         text-white font-black rounded-2xl 
                         shadow-[0_10px_30px_rgba(115,0,115,0.3)] 
                         hover:shadow-[0_15px_40px_rgba(115,0,115,0.5)] 
                         hover:scale-[1.02] active:scale-95 
                         transition-all duration-300 uppercase tracking-widest text-sm dark:bg-none dark:bg-purple-900"
            >
              Proceed to Checkout
            </button>
            <p className="text-center text-[10px] text-zinc-400 mt-4 flex items-center justify-center gap-2 uppercase tracking-tighter">
              <LockKeyhole size={10} />
              100% Secure Encrypted Payment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

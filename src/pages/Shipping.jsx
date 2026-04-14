

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 dark:bg-black">
      <div className="container mx-auto space-y-8 mt-20">
        <div className=" bg-[#340c4b]/20 p-8 rounded-2xl border-white/20  shadow-xl hover:shadow-2xl transition-all duration-300 border  dark:border-purple-600 ">
          <h1 className="text-3xl font-mono font-bold text-[#340c4b] underline mt-5 dark:text-purple-500">
            🚗Delivery Time
          </h1>
          <ul className="space-y-4">
            <li>
              <span className="text-lg font-bold text-[#b60e8f] ">
                Within Cairo and Giza:
              </span>{" "}
              Delivery within 24-48 business hours.
            </li>
            <li>
              <span className="text-lg font-bold text-[#b60e8f] ">
                Other governorates:
              </span>{" "}
              Delivery takes 3-5 business days.
            </li>
            <li>
              <span className="text-lg font-bold text-[#b60e8f] ">Note:</span>{" "}
              Orders placed on Fridays and public holidays will be processed
              starting the next business day.
            </li>
          </ul>
        </div>

        <div className=" bg-[#340c4b]/20 p-8 rounded-2xl border-white/20  shadow-xl hover:shadow-2xl transition-all duration-300  border  dark:border-purple-600">
          <h1 className="text-3xl font-mono font-bold text-[#340c4b] underline mt-5 dark:text-purple-500">
            ✨Product inspection
          </h1>
          <p>
            "We encourage our customers to inspect the product upon receipt. In
            case of any damage or error in the order, please inform the delivery
            person immediately or contact us within 24 hours."
          </p>
        </div>
        <div className=" bg-[#340c4b]/20 p-8 rounded-2xl border-white/20  shadow-xl hover:shadow-2xl transition-all duration-300 border  dark:border-purple-600">
          <h1 className="text-3xl font-mono font-bold text-[#340c4b] underline mt-5 dark:text-purple-500 ">
            💵Shipping Fees
          </h1>
          <ul className="space-y-4">
            <li>
              <span className="text-lg font-bold text-[#b60e8f] ">
                {" "}
                For Cairo and Giza:
              </span>
              50 Egyptian pounds
            </li>
            <li>
              <span className="text-lg font-bold text-[#b60e8f] ">
                Other governorates:
              </span>
              70 Egyptian pounds
            </li>
            <li>
              <span className="text-lg font-bold text-[#b60e8f] ">
                Free shipping:{" "}
              </span>
              Enjoy free shipping on orders over 1000 Egyptian pounds.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Shipping;

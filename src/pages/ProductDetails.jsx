import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

import { Rating } from "react-simple-star-rating";
import { addToCart } from "../redux/productSlice";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";





const ProductDetails = () => {
  const [productId, setProductId] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`https://sandbox.mockerito.com/ecommerce/api/products/${id}`)
      .then((res) => {
        //   console.log( res.data);
        setProductId(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-100">
        <RingLoader color="#340C4B" size={120} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-600 text-lg font-semibold">
        Error: {error}
      </div>
    );
  }
  const handleAddToCart = () => {
    // 2. إرسال بيانات المنتج للـ Redux
    dispatch(
      addToCart({
        id: productId.id,
        title: productId.title,
        price: productId.price,
        image: productId.image,
        category: productId.category,
        quantity: 1,
      }),
    );

    toast.success("Added to cart!");
  };

  return (
    <>
      <div className="container mx-auto p-10 ">
        {productId && (
          <div className="flex flex-col md:flex-row gap-10 bg-white p-8 rounded-2xl shadow-xl mt-[60px] border border-purple-950 dark:bg-black/50">
            <img
              src={productId.image}
              alt={productId.title}
              className=" md:w-96 object-contain h-[200px]"
            />
            <div className="flex flex-col justify-center">
              <p className="bg-[#340c4b] text-white p-2 rounded-lg text-xl w-40">
                {productId.category}
              </p>
              <h1 className="text-4xl font-bold text-gray-800 mb-4 dark:text-white/90">
                {productId.title}
              </h1>
              <p className="text-gray-700 text-md mb-6 leading-relaxed dark:text-gray-500">
                {productId.description}
              </p>

              <span className="text-xl font-bold text-[#b60e8f] dark:text-purple-500">
                {" "}
                price :{productId.price}${" "}
              </span>
              <div className="flex justify-around">
                <Rating
                  initialValue={Number(productId.rating.rate)}
                  readonly={true}
                  size={20}
                  allowFraction={true}
                  fillColor="#f1c40f"
                  emptyColor="#cccccc"
                  SVGclassName="inline-block"
                />
                {/* <span className="text-3xl font-bold text-purple-600"> {productId.rating.rate} </span> */}
                <span className="text-xl font-bold text-[#5f496c]">
                  {" "}
                  ({productId.rating.count} reviews){" "}
                </span>
              </div>

              <button
                onClick={handleAddToCart}
                className="bg-[#730073] hover:bg-purple-700 text-white mt-5 w-[200px] py-3 rounded-full transition-colors font-bold dark:bg-purple-900"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetails;

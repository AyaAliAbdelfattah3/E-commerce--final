import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { CircleLoader } from "react-spinners";

import { addToCart } from "../redux/productSlice";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";



const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const disptch = useDispatch();
  const selectedCategory = useSelector((state) => state.categoryReducer.value);

  // filter products in searchBar
  const search = useSelector((state) => state.searchReducer.search);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory]);
  //   const data = useSelector((state) => state);
  // console.log(data);

  useEffect(() => {
    axios
      .get("https://sandbox.mockerito.com/ecommerce/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-blue-100 dark:bg-none dark:bg-black">
        <CircleLoader color="#6366f1" size={120} />
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
  // فيلتر الكاتيجورى
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  //  بناء ع الكاتيجورى فيلتر السيرش
  const filterProductsfinal = filteredProducts.filter((prod) =>
    prod.title.toLowerCase().includes(search.toLowerCase()),
  );

  // pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentProducts = filterProductsfinal.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="">
      <div className=" container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 mt-10 ">
        {filterProductsfinal.length > 0 ? (
          currentProducts.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-indigo-200 transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-transparent dark:hover:shadow-indigo-900 dark:border-purple-900"
            >
              {/* صورة المنتج */}
              <div className=" group relative overflow-hidden bg-gradient-to-b from-[#340c4b] to-white dark:bg-none dark:bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-500 mt-5"
                />
                {/* الـ Overlay  */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link
                    to={`product/${item.id}`}
                    className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-purple-800 transition-all duration-300 flex items-center gap-2"
                  >
                    <p>
                      <Eye />
                    </p>
                    <span> View</span>
                  </Link>
                </div>
              </div>

              {/* تفاصيل المنتج */}
              <div className="p-5 flex flex-col gap-2">
                <h4 className="bg-indigo-900 rounded-full text-white font-bold p-1 w-40 text-center dark:bg-black border border-transparent dark:border-purple-900 ">
                  {item.category}
                </h4>
                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-900 line-clamp-1 dark:text-slate-100 dark:hover:text-purple-900">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.description}
                </p>
                <p className="text-[#b60e8f] font-bold mt-2 text-right dark:text-purple-900">
                  price: {item.price}$
                </p>
              </div>
              {/* <button className="text-[#b60e8f] font-bold p-3">Add to cart</button> */}
              <div className="text-center mb-5">
                <button
                  onClick={() => {
                    disptch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                        image: item.image,
                        description: item.description,
                        category: item.category,
                        quantity: 1,
                      }),
                    );
                    toast.success("Successfully adding to cart");
                  }}
                  className="px-10 py-3 rounded-2xl bg-gradient-to-r from-[#662da8] to-[#9c3584] text-white font-semibold shadow-lg border border-white/20 backdrop-blur-sm hover:from-[#7b39c9] hover:to-[#b33d98] hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1 "
                >
                  Add to Cart
                </button>
              </div>
              <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-2xl text-purple-950 font-bold italic dark:text-white">
              Sorry, there is no product by that name in AyaShop 🛍️
            </p>
          </div>
        )}
      </div>

      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={filterProductsfinal.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Products;

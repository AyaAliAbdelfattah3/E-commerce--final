import  { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCategory } from "../redux/categorySlice";
import { updateSearch } from "../redux/searchSlice";
import axios from "axios";








const Category = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState([]);
  // use selectedcategory to style category button
  const selectedCategory = useSelector((state) => state.categoryReducer.value);
  
  //fetching data and fiter categories from repeating and distance
  useEffect(() => {
    axios.get("https://sandbox.mockerito.com/ecommerce/api/products/categories")
      .then((res) => {
       const dataa =res.data
       
        // 1. أولاً: نمسح المسافات الزايدة من كل الكلمات (عشان men's clothing تبقى موحدة)
        const trimmedData = dataa.map((item) => item.trim());

        // 2. ثانياً: نمسح التكرار (دلوقتي الـ Set هتعرف إنهم زي بعض)
        const uniqueData = [...new Set(trimmedData)];

        // 3. ثالثاً: نحذف كلمة "string" تماماً
        const cleanData = uniqueData.filter((item) => item !== "string");
                setCategory(cleanData);


      })
        
      .catch((error) => {
        console.error("Error fetching categories:",error)
      });
  }, []);



  return (
    <div className="relative z-[999] flex flex-wrap items-center justify-center gap-8 p-4 mt-10 dark:bg-black">
      <button
        onClick={() => {
          dispatch(updateCategory("all"));
          dispatch(updateSearch(""));
        }}
        className="bg-[#340c4b] p-2 text-white font-serif font-semibold rounded-xl hover:text-[#390368] hover:bg-[#f1ecce] dark:bg-black border border-transparent dark:border-purple-500/50 dark:text-purple-400 dark:hover:bg-purple-900/30 dark:hover:text-purple-200"
      >
        All
      </button>
      {category.map((cat, index) => (
        <button
          key={index}
          onClick={() => {
            dispatch(updateCategory(cat));
            dispatch(updateSearch(""));
          }}
          className={`bg-[#340c4b] p-2  text-white font-serif font-semibold rounded-xl hover:text-[#390368] hover:bg-[#f1ecce]
      ${
        selectedCategory === cat
          ? "bg-gray-500 text-black dark:bg-slate-700 dark:text-white"
          : "bg-[#340c4b] text-white hover:bg-[#f1ecce] hover:text-[#390368]"
      }
      dark:bg-black border border-transparent dark:border-purple-500/50 dark:text-purple-400 dark:hover:bg-purple-900/30 dark:hover:text-purple-2000`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Category;

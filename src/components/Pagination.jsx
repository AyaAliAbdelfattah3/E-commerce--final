const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  // حساب عدد الصفحات: (الإجمالي / عدد العناصر في الصفحة)
  // وبنستخدم Math.ceil عشان لو فيه كسر يقربه للأكبر (مثلاً 2.1 تبقى 3 صفحات)
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // لو مفيش غير صفحة واحدة، متظهرش الترقيم أصلاً
  if (pageNumbers.length <= 1) return null;

  return (
    <nav className="flex justify-center items-center mt-10 mb-10">
      <ul className="inline-flex gap-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              onClick={() => paginate(number)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                currentPage === number
                  ? "bg-indigo-900 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-indigo-100 dark:bg-black dark:text-white border border-transparent dark:border-purple-900 "
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

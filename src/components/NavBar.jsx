import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Menu,
  ShoppingCart,
  User,
  X,
  Search,
  Moon,
  SunMedium,
  LogOut,
} from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setDark } from "../redux/darkSlice";
import { updateSearch } from "../redux/searchSlice";
import { getAuth, signOut } from "firebase/auth";
import Swal from "sweetalert2";
import { logOutUser } from "../redux/userSlice";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const proDucts = useSelector((state) => state.productsReducer.products);
  const dark = useSelector((state) => state.darkReducer.darkMode);
  const search = useSelector((state) => state.searchReducer.search);
  const userInfo = useSelector((state) => state.userReducer.userInfo);

  //function of handling logout
  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
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
    }).then((res) => {
      if (res.isConfirmed) {
        const auth = getAuth();

        signOut(auth).then(() => {
          dispatch(logOutUser());
          Swal.fire({
            title: "You are logged out",
            icon: "success",
            background: "transparent",
            showConfirmButton: false,
            timer: 2000,
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
        });
      }
    });
  };

  return (
    <nav className="bg-[#340c4b] shadow-md w-full fixed z-[1000] dark:bg-black/80">
      <div className="container mx-auto flex justify-between items-center h-[70px] px-6">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-[#f4f2f7] dark:text-[#9426ee]">
              AyaShop
            </h2>
          </div>
        </Link>

        {/* links */}
        <ul className="hidden md:flex justify-center items-center gap-8 text-[#f4f2f7] font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#d5bee9] decoration-2 underline-offset-8"
                : "hover:text-[#d5bee9] cursor-pointer"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#d5bee9] decoration-2 underline-offset-8"
                : "hover:text-[#d5bee9] cursor-pointer"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "underline decoration-[#d5bee9] decoration-2 underline-offset-8"
                : "hover:text-[#d5bee9] cursor-pointer"
            }
          >
            Contact
          </NavLink>
        </ul>
        {/* search bar */}

        <div className="hidden md:flex justify-center items-center bg-transparent">
          <div
            className={`relative h-12 transition-all duration-500 ${
              active ? "w-64" : "w-12"
            }`}
          >
            {/* Input */}
            <input
              onChange={(e) => {
                dispatch(updateSearch(e.target.value));
              }}
              type="text"
              value={search}
              placeholder="Search..."
              onBlur={() => setActive(false)}
              className={`
            absolute left-0 top-0 h-12 w-full rounded-full
            bg-white/20 backdrop-blur-md text-white
            outline-none px-4
            transition-all duration-500
            ${active ? "opacity-100 pl-4 " : "opacity-0 pl-0"}
          `}
            />

            {/* Button */}
            <button
              onClick={() => setActive(!active)}
              className={`
            absolute top-0 left-0 h-12 w-12 rounded-full
            flex items-center justify-center
            bg-white text-black
            transition-all duration-500
            ${active ? "translate-x-52 bg-white text-[#470680] shadow-lg" : ""}
          `}
            >
              <Search size={20} />
            </button>
          </div>
        </div>
        {/* icons */}
        <div className="hidden md:flex justify-center items-center gap-6 text-[#f4f2f7]">
          <button
            onClick={() => {
              dispatch(setDark());
            }}
          >
            {dark ? <SunMedium /> : <Moon />}
            {/* <Moon className="cursor-pointer hover:text-[#d5bee9]" /> */}
          </button>

          <Link
            to="/cart"
            className="relative z-50 cursor-pointer hover:text-[#d5bee9] pointer-events-auto flex"
          >
            <ShoppingCart />
            <span className="text-lg font-medium text-[#b60e8f] mt-[-20px] dark:text-[#9931ee]">
              {proDucts.length || 0}
            </span>
          </Link>

          {userInfo ? (
            <>
              {userInfo.userName}
              <button onClick={handleLogout} className="" title="">
                <LogOut />
              </button>
            </>
          ) : (
            <Link to="/sign">
              <User />
            </Link>
          )}
        </div>

        {/* drop menu*/}
        <div
          onClick={() => setMenu(!menu)}
          className="md:hidden text-[#f4f2f7] cursor-pointer"
        >
          {menu ? (
            <X size={28} className="text-[#f4f2f7]" />
          ) : (
            <Menu size={28} />
          )}
        </div>

        {/* dropdown in other screen */}
        {menu && (
          <div className="fixed top-[70px] left-0  w-full bg-white shadow-md flex flex-col items-center gap-5 py-6 md:hidden z-[999] dark:bg-black ">
            <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium dark:text-white">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[#d5bee9] decoration-2 underline-offset-8"
                    : "hover:text-[#d5bee9] cursor-pointer"
                }
                onClick={() => setMenu(false)}
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[#d5bee9] decoration-2 underline-offset-8"
                    : "hover:text-[#d5bee9] cursor-pointer"
                }
                onClick={() => setMenu(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "underline decoration-[#d5bee9] decoration-2 underline-offset-8"
                    : "hover:text-[#d5bee9] cursor-pointer"
                }
                onClick={() => setMenu(false)}
              >
                Contact
              </NavLink>
            </ul>

            <div className="md:hidden flex justify-center items-center bg-[#340c4b] rounded-full">
              <div
                className={`relative h-12 transition-all duration-500 ${
                  active ? "w-64" : "w-12"
                }`}
              >
                {/* Input */}
                <input
                  onChange={(e) => {
                    dispatch(updateSearch(e.target.value));
                  }}
                  type="text"
                  value={search}
                  placeholder="Search..."
                  onBlur={() => setActive(false)}
                  className={`
            absolute left-0 top-0 h-12 w-full rounded-full
            bg-white/20 backdrop-blur-md text-white
            outline-none px-4
            transition-all duration-500
            ${active ? "opacity-100 pl-4 " : "opacity-0 pl-0"}
          `}
                />

                {/* Button */}
                <button
                  onClick={() => setActive(!active)}
                  className={`
            absolute top-0 left-0 h-12 w-12 rounded-full
            flex items-center justify-center
            bg-white text-black
            transition-all duration-500
            ${active ? "translate-x-52 bg-white text-[#470680] shadow-lg" : ""}
          `}
                >
                  <Search size={20} />
                </button>
              </div>
            </div>

            <div className="flex gap-6 text-gray-500">
              <Link
                to="/cart"
                className="relative z-50 cursor-pointer hover:text-[#d5bee9] pointer-events-auto flex"
              >
                <ShoppingCart />
                <span className="text-lg font-medium text-[#b60e8f] mt-[-20px] dark:text-[#9931ee]">
                  {proDucts.length || 0}
                </span>
              </Link>

              {userInfo ? (
                <>
                  {userInfo.userName}
                  <button onClick={handleLogout} className="" title="">
                    <LogOut />
                  </button>
                </>
              ) : (
                <Link to="/sign">
                  <User />
                </Link>
              )}
              <button
                onClick={() => {
                  dispatch(setDark());
                }}
              >
                {dark ? <SunMedium /> : <Moon />}
                {/* <Moon className="cursor-pointer hover:text-[#d5bee9]" /> */}
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;

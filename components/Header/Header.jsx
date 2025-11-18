"use client";
import { menuList } from "@/Data/changableData";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import Cookies from "js-cookie";

const Header = () => {
  const locationMatch = usePathname();
  const router = useRouter();

  const [openToggle, setOpenToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  // Load user data
  useEffect(() => {
    const token = Cookies.get("token");
    const userData = localStorage.getItem("user");

    try {
      if (userData) setUser(JSON.parse(userData));
      setIsLoggedIn(!!token && !!userData);
    } catch (err) {
      console.error("Invalid user data:", err);
      localStorage.removeItem("user");
      setIsLoggedIn(false);
    }
  }, [pathname]);
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".user-dropdown")) setShowDropdown(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Logout handler
  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    router.push("/login");
  };

  // Hide header on auth pages
  const blockHeader = ["/sign-up", "/login", "/sign-up/verify", "/login/verify"];
  if (blockHeader.includes(locationMatch)) return null;

  return (
    <>
      {/* ===== Header Section ===== */}
      <header className="w-full sticky top-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <nav className="w-full h-[80px] flex items-center px-[10px] md:px-[7%] justify-between">
          {/* Logo Section */}
          <div className="md:w-[190px] w-16">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.ico"
                alt="Kraviona"
                loading="lazy"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <p className="text-gray-900 text-lg font-semibold">Kraviona</p>
                <small className="text-gray-500 md:text-xs text-[10px]">
                  IT Web Solutions
                </small>
              </div>
            </div>
          </div>

          {/* Menu List */}
          <section className="flex gap-8 items-center">
            <div className="md:flex hidden text-sm font-semibold md:gap-8 items-center">
              {menuList.map((menu, idx) => {
                const isActive = locationMatch === menu.link;
                return (
                  <Link
                    href={menu.link}
                    key={idx}
                    className={`${isActive
                      ? "text-[#00cba9]"
                      : "text-gray-600 hover:text-[#00cba9] transition-colors"
                      } capitalize`}
                  >
                    {menu.name}
                  </Link>
                );
              })}
            </div>

            {/* ✅ User / Login Section */}
            {isLoggedIn ? (
              <div className="relative user-dropdown">
                <FaUser
                  className="text-[#00cba9] text-xl cursor-pointer"
                  onClick={() => setShowDropdown(!showDropdown)}
                />

                {showDropdown && (
                  <div className="absolute top-12 right-4 w-56 rounded-xl bg-white text-gray-900 shadow-lg border border-gray-200">
                    <div className="px-4 py-3 border-b border-gray-200">
                      <p className="text-sm font-semibold">
                        {user?.fullname || "Unknown"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {user?.email || "Not provided"}
                      </p>
                    </div>

                    <div className="flex flex-col py-2">
                      <Link
                        href="/my-account"
                        className="px-4 py-2 text-sm hover:bg-gray-100 transition rounded-lg"
                      >
                        My Account
                      </Link>
                      <Link
                        href="/settings"
                        className="px-4 py-2 text-sm hover:bg-gray-100 transition rounded-lg"
                      >
                        Settings
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100 hover:text-red-600 transition rounded-lg"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/login"
                className="md:block hidden bg-[#00cba9] hover:bg-[#009e8b] px-8 py-2 text-white rounded-full font-semibold transition-all"
              >
                Login
              </Link>
            )}

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpenToggle(!openToggle)}
              className="w-[28px] h-[28px] md:hidden block text-gray-900"
            >
              <TiThMenu className="w-full h-full" />
            </button>
          </section>
        </nav>
      </header>

      {/* ===== Mobile Sidebar ===== */}
      {openToggle && (
        <section className="md:hidden block z-50">
          <div className="fixed bg-black/50 w-full h-screen top-0 z-50 animate-slideIn">
            <div className="w-full h-full flex items-center">
              <div className="w-[70%] h-full bg-white shadow-2xl border-r border-gray-200 slideIn">
                {/* Logo */}
                <div className="w-full p-4 flex justify-start border-b border-gray-200">
                  <div className="md:w-[190px] w-16">
                    <div className="flex items-center gap-3">
                      <img
                        src="/favicon.ico"
                        alt="Kraviona"
                        loading="lazy"
                        className="w-10 h-10 object-contain"
                      />
                      <div className="flex flex-col leading-tight">
                        <p className="text-gray-900 text-lg font-semibold">Kraviona</p>
                        <small className="text-gray-500 md:text-xs text-[10px]">
                          IT Web Solutions
                        </small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col  gap-3  text-gray-700">
                  {menuList.map((menu, idx) => {
                    const isActive = locationMatch === menu.link;
                    return (
                      <Link
                        href={menu.link}
                        key={idx}
                        className={`w-full px-5 py-3 hover:bg-gray-100 ${isActive ? "bg-gray-100 text-[#00cba9]" : ""
                          } transition-all`}
                        onClick={() => setOpenToggle(false)}
                      >
                        {menu.name}
                      </Link>
                    );
                  })}

                  {
                    isLoggedIn ? (
                      <button
                        onClick={() => {
                          handleLogout();
                          setOpenToggle(false);
                        }}
                        className="w-full block text-center bg-rose-400 hover:bg-rose-500 px-8 py-3 text-white  font-semibold transition-all"
                      >
                        Logout
                      </button>
                    ) : (
                      <Link
                        href="/login"
                        className="w-full block text-center bg-[#00cba9] hover:bg-[#009e8b] px-8 py-3 text-white  font-semibold transition-all"
                        onClick={() => setOpenToggle(false)}
                      >
                        Login
                      </Link>
                    )
                  }
                </div>
              </div>

              {/* Overlay Close */}
              <div
                className="w-[30%] relative h-full bg-transparent"
                onClick={() => setOpenToggle(false)}
              >
                <IoClose className="absolute top-4 right-4 text-[#00cba9] text-3xl cursor-pointer" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Animation ===== */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Header;
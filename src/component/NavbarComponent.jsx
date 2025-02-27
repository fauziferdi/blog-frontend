import React, { useState } from "react";
import { Bell, Bookmark, Layers } from "lucide-react";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white">
      <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <h1 className="font-mono text-2xl font-bold text-slate-700">
                Bloguys
              </h1>
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-6">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="flex text-gray-500 transition hover:text-gray-500/75"
                    to="/category"
                  >
                    Categories
                    <span className="ms-2">
                      <Layers size={20} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex text-gray-500 transition hover:text-gray-500/75"
                    to="/Bookmark"
                  >
                    Bookmarks
                    <span className="ms-2">
                      <Bookmark size={20} />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex text-gray-500 transition hover:text-gray-500/75"
                    to="/notification"
                  >
                    Notification
                    <span className="ms-2">
                      <Bell size={20} />
                    </span>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="hidden md:relative md:block">
              <button
                type="button"
                className="overflow-hidden border border-gray-300 rounded-full shadow-inner"
                onClick={toggleMenu}
              >
                <span className="sr-only">Toggle dashboard menu</span>

                <img
                  src="https://marketplace.canva.com/EAFcmQkyAxc/2/0/1600w/canva-black-simple-bold-professional-business-twitter-profile-picture-4H4F1Z7ve54.jpg"
                  alt=""
                  className="object-cover size-10"
                />
              </button>

              {isMenuOpen && (
                <div
                  className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg "
                  role="menu"
                >
                  <div className="p-2">
                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      My profile
                    </Link>

                    <Link
                      to="/"
                      className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                      role="menuitem"
                    >
                      Settings
                    </Link>
                  </div>

                  <div className="p-2">
                    <button
                      type="submit"
                      className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-700 rounded-lg hover:bg-red-50"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                      </svg>
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="block md:hidden">
              {/* Tombol hamburger di layar mobile */}
              <button
                className="p-2 text-gray-600 transition bg-gray-100 rounded-sm hover:text-gray-600/75"
                onClick={toggleMobileMenu} // Ini yang penting!
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Mobile (Fullscreen) */}
            {isMobileMenuOpen && (
              <div className="fixed top-0 left-0 z-50 w-full h-full bg-white">
                {/* Overlay fullscreen */}
                <div className="flex justify-end p-4">
                  <button className="text-gray-600" onClick={toggleMobileMenu}>
                    {/* Tombol close */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <nav className="w-full h-full p-4">
                  {/* Navigasi mobile */}
                  <ul className="flex flex-col items-center gap-4 text-lg ">
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        Notification
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        My Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        className="text-gray-700 hover:text-gray-900"
                      >
                        Settings
                      </Link>
                    </li>
                    <li>
                      <button
                        type="submit"
                        className="flex items-center w-full gap-2 px-4 py-2 text-sm text-red-700 rounded-lg hover:bg-red-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                          />
                        </svg>
                        Logout
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;

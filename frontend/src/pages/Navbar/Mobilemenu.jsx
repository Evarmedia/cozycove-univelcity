import { useState } from "react";
import { FaTimes, FaCaretDown } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { RiMenu2Fill } from "react-icons/ri";


const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "Shop",
    link: "/products",
  },
  {
    id: 3,
    name: "About",
    link: "/about",
  },
  {
    id: 4,
    name: "Brands",
    link: "/categories",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/categories/trending",
  },
  {
    id: 2,
    name: "Men Fashion",
    link: "/categories/men",
  },
  {
    id: 3,
    name: "Women Fashion",
    link: "/categories/women",
  },
  {
    id: 4,
    name: "Children Fashion",
    link: "/categories/children",
  },
];

const Mobilemenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="lg:hidden sm:flex md:flex-col">
        <button
          className="block text-gray-500"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <>
            <FaTimes className=" text-2xl bg-blue-300 rounded-md text-black" />
            <div
            className='w-screen h-screen absolute -z-10 popup-overlay'
            // onClick={}
          ></div>
            </>
          ) : (
            <>
            <RiMenu2Fill className="text-3xl bg-blue-300 rounded-md text-black" />
            </>
          )}
        </button>
        {isOpen && (
          <ul className="flex flex-col items-center gap-4 bg-slate-50">
            {MenuLinks.map((data, index) => (
              <li key={index}>
                <NavLink
                  to={data.link}
                  className="block px-8 font-semibold text-gray-500 hover:text-black hover:bg-primary/20 duration-200"
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
            {/* Dropdown */}
            <li className="relative cursor-pointer group">
              <a
                to="/"
                className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2"
              >
                Categories
                <span>
                  <FaCaretDown className="group-hover:rotate-180 duration-300" />
                </span>
              </a>

              {/* Dropdown Links */}
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white">
                <ul className="space-y-2">
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <NavLink
                        className="text-gray-500  dark:hover:text-white duration-200 inline-block w-full p-2 hover:bg-primary/20 rounded-md font-semibold"
                        to={data.link}
                      >
                        {data.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default Mobilemenu;

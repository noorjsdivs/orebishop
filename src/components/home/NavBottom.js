import React, { useState, useRef, useEffect } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../designLayouts/Flex";

const NavBottom = () => {
  const [show, setShow] = useState(false);
  let ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      // console.log(e.target);
      if (ref.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, [show]);
  return (
    <div className="w-full bg-[#F5F5F3]">
      <div className="max-w-container mx-auto">
        <Flex className="flex items-center justify-between w-full h-24">
          <div
            onClick={() => setShow(!show)}
            ref={ref}
            className="flex cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Shop by Category</p>

            {show && (
              <ul className="absolute top-40 z-50 bg-primeColor text-[#767676] h-auto p-4 pb-6">
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Accessories
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Furniture
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Electronics
                </li>
                <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400  hover:border-b-white hover:text-white duration-300 cursor-pointer">
                  Bags
                </li>
              </ul>
            )}
          </div>
          <div className="relative w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center justify-between px-6">
            <input
              className="w-[80%] h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
              type="text"
              placeholder="Search Products"
            />
            <FaSearch className="w-5 h-5" />
          </div>
          <div className="flex gap-4 items-center pr-6">
            <div className="flex">
              <FaUser />
              <FaCaretDown />
            </div>
            <div>
              <FaShoppingCart />
            </div>
          </div>
        </Flex>
      </div>
    </div>
  );
};

export default NavBottom;

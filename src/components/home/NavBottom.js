import React, { useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import Flex from "../designLayouts/Flex";

const NavBottom = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full bg-[#F5F5F3]">
      <div className="max-w-container mx-auto">
        <Flex className="flex items-center justify-between w-full h-24">
          <div
            onClick={() => setShow(!show)}
            className="flex cursor-pointer items-center gap-2 text-primeColor"
          >
            <HiOutlineMenuAlt4 className="w-5 h-5" />
            <p className="text-[14px] font-normal">Shop by Category</p>
          </div>
          {show && (
            <div className="absolute top-40 bg-primeColor text-[#767676] w-96 h-auto py-6 px-4">
              <p>Hi there</p>
            </div>
          )}

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

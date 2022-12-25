import React from "react";
import { MdLocalShipping } from "react-icons/md";
import { CgRedo } from "react-icons/cg";

const BannerBottom = () => {
  return (
    <div className="w-full bg-white border-b-[1px] border-b-gray-200">
      <div className="max-w-container mx-auto h-20 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold font-titleFont">2</span>
          <p className="text-lightText text-base">Two years warranty</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xl">
            <MdLocalShipping />
          </span>
          <p className="text-lightText text-base">Free shipping</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-2xl">
            <CgRedo />
          </span>
          <p className="text-lightText text-base">Return policy in 30 days</p>
        </div>
      </div>
    </div>
  );
};

export default BannerBottom;

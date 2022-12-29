import React, { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ prevLocation, title }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");
  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);
  return (
    <div className="w-full py-20 flex flex-col gap-2">
      <h1 className="text-5xl text-primeColor font-titleFont font-bold">
        {title}
      </h1>
      <p className="text-sm font-normal text-lightText capitalize flex items-center">
        {prevLocation === "" ? "Home" : prevLocation}
        <span className="px-1">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize"> {locationPath}</span>
      </p>
    </div>
  );
};

export default Breadcrumbs;

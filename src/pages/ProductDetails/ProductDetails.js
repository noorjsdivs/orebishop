import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import { SplOfferData } from "../../constants";

const ProductDetails = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  const [productInfo, setProductInfo] = useState([]);

  useEffect(() => {
    setProductInfo(location.state.item);
    setPrevLocation(location.pathname);
  }, [location, productInfo]);

  return (
    <div className="w-full mx-auto">
      <div className="max-w-container mx-auto">
        <div className="-mt-10">
          <Breadcrumbs title="" prevLocation={prevLocation} />
        </div>
        <div className="w-full flex gap-4 h-full -mt-10 pb-20 bg-gray-100 p-4">
          <div className="w-1/6 h-full">
            <h3 className="font-titleFont text-xl font-semibold mb-6 underline underline-offset-4 decoration-[1px]">
              Products on sale
            </h3>
            <div className="flex flex-col gap-2">
              {SplOfferData.map((item) => (
                <div
                  key={item._id}
                  className="flex items-center gap-4 border-b-[1px] border-b-gray-300 py-2"
                >
                  <div>
                    <img className="w-24" src={item.img} alt={item.img} />
                  </div>
                  <div className="flex flex-col gap-2 font-titleFont">
                    <p className="text-base font-medium">{item.productName}</p>
                    <p className="text-sm font-semibold">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/6">
            <img
              className="w-full h-full object-cover"
              src={productInfo.img}
              alt={productInfo.img}
            />
          </div>
          <div className="w-3/6 h-full p-14 flex flex-col gap-6 justify-center">
            <h2 className="text-4xl font-semibold">
              {productInfo.productName}
            </h2>
            <p className="text-xl font-semibold">${productInfo.price}</p>
            <p className="text-base text-gray-600">{productInfo.des}</p>
            <p className="text-sm">Be the first to leave a review.</p>
            <p className="font-medium text-lg">
              <span className="font-normal">Colors:</span> {productInfo.color}
            </p>
            <p className="w-full h-14 flex items-center justify-between bg-white">
              <span className="w-14 h-full text-2xl flex items-center justify-center hover:bg-gray-200 duration-300 cursor-pointer">
                -
              </span>
              1
              <span className="w-14 h-full text-2xl flex items-center justify-center hover:bg-gray-200 duration-300 cursor-pointer">
                +
              </span>
            </p>
            <button className="w-full py-4 bg-primeColor hover:bg-black duration-300 text-white text-lg font-titleFont">
              Add to Cart
            </button>
            <p className="font-normal text-sm">
              <span className="text-base font-medium"> Categories:</span> Spring
              collection, Streetwear, Women Tags: featured SKU: N/A
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

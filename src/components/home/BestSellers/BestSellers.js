import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          img={bestSellerOne}
          productName="Flower Base"
          price="35.00"
          color="Blank and White"
          badge={true}
        />
        <Product
          img={bestSellerTwo}
          productName="New Backpack"
          price="180.00"
          color="Gray"
          badge={false}
        />
        <Product
          img={bestSellerThree}
          productName="Household materials"
          price="25.00"
          color="Mixed"
          badge={true}
        />
        <Product
          img={bestSellerFour}
          productName="Travel Bag"
          price="220.00"
          color="Black"
          badge={false}
        />
      </div>
    </div>
  );
};

export default BestSellers;
import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
} from "../../../assets/images/index";

const NewArrivals = () => {
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          img={newArrOne}
          productName="Round Table Clock"
          price="44.00"
          color="Black"
          badge={true}
        />
        <Product
          img={newArrTwo}
          productName="Smart Watch"
          price="250.00"
          color="Black"
          badge={true}
        />
        <Product
          img={newArrThree}
          productName="cloth Basket"
          price="80.00"
          color="Mixed"
          badge={true}
        />
        <Product
          img={newArrFour}
          productName="Funny toys for babies"
          price="60.00"
          color="Mixed"
          badge={false}
        />
      </div>
    </div>
  );
};

export default NewArrivals;

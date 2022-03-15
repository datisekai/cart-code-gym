import React from "react";
import NumberFormat from "react-number-format";

const ProductCart = ({ product }) => {
  return (
    <div className="flex justify-between items-center mt-2 px-5 rounded-md bg-gray-100 py-3">
      <img
        className="w-[120px] h-[120px] object-cover w-[20%]"
        src={product.image}
        alt=""
      />
      <div className="w-[50%] px-5">
      <h3 className="font-medium text-xl">{product.name}</h3>
      <h3 className="font-medium text-xl">Quantify: {product.quantify}</h3>
      </div>
      <NumberFormat
        className={"bg-transparent text-center text-xl mt-1 font-medium w-[30%]"}
        value={product.prices}
        thousandSeparator={true}
        suffix={" VND"}
      />
    </div>
  );
};

export default ProductCart;

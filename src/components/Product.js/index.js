import React from "react";
import NumberFormat from "react-number-format";

const Product = ({ product,handleAddToCart,productList }) => {
    const foundProduct = productList.filter((item) => item.id === product.id);
  return (
    <div
      className="bg-gray-100 flex flex-col justify-center items-center rounded-md p-5"
    >
      <img className="w-[200px] h-[200px] object-cover" src={product.image} alt="" />
      <h3 className="text-xl mt-1">{product.name}</h3>
      <NumberFormat
        className={"bg-transparent text-center text-xl mt-1 font-medium"}
        value={product.prices}
        thousandSeparator={true}
        suffix={"VND"}
      />
      <button disabled={foundProduct[0].quantify > 0 ? false : true} onClick={() => handleAddToCart(product)} className={`mt-1 px-5 py-1 bg-gradient-to-r from-gray-300 to-red-100 font-semibold w-full rounded-md transition-all ${foundProduct[0].quantify > 0 ? 'hover:opacity-80' : 'opacity-50'}`}>
        ADD TO CART
      </button>
    </div>
  );
};

export default Product;

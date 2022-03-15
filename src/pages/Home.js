import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product.js";
import {
  addToCart,
  decreaseProduct,
  setLoading,
} from "../redux/cartReducer.js";
import swal from "sweetalert";
import { BarWave } from "react-cssfx-loading";
import "../App.css";
import {toast} from 'react-toastify'

const Home = () => {
  const { productList, walletAmout, cartList, isLoading } = useSelector(
    (state) => state.cart
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, [1500]);
  }, []);

  useEffect(() => {
    console.log(cartList);
  }, [cartList]);

  useEffect(() => {
    console.log(walletAmout);
  }, [walletAmout]);

  useEffect(() => {
    console.log(productList);
  }, [productList]);

  const handleAddToCart = (product) => {
    swal({
      title: "Are you sure?",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(setLoading(true));
        setTimeout(() => {
          const newProductCart = { ...product, quantify: 1 };
          dispatch(addToCart(newProductCart));
          dispatch(decreaseProduct(product));
          toast.success('Add product to cart successfull !!')
        }, 1500);
      }
    });
  };
  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productList &&
          productList.map((item) => (
            <Product
              key={item.id}
              product={item}
              handleAddToCart={handleAddToCart}
              productList={productList}
            />
          ))}
      </div>
      {isLoading && (
        <div className="fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center overlay">
          <BarWave color="#60A5FA" width="30px" height="30px" duration="2s" />
        </div>
      )}
    </div>
  );
};

export default Home;

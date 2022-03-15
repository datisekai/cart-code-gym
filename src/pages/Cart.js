import React, { useEffect } from "react";
import { BarWave } from "react-cssfx-loading/lib";
import NumberFormat from "react-number-format";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import swal from "sweetalert";
import ProductCart from "../components/ProductCart";
import { deleteAllCart, setAmout, setLoading } from "../redux/cartReducer";

const Cart = () => {
  const { cartList, isLoading, walletAmout } = useSelector(
    (state) => state.cart
  );
  const total = cartList.reduce(
    (cur, pre) => cur + pre.prices * pre.quantify,
    0
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    setTimeout(() => {
      dispatch(setLoading(false));
    }, [1500]);
  }, []);

  const handleCheckOut = () => {
    if (cartList.length < 1) {
      toast.error("There are currently no products in your cart !");
    } else {
      swal({
        title: "Are you sure?",
        icon: "info",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          dispatch(setLoading(true));
          setTimeout(() => {
            if (walletAmout < total) {
              swal("Oops", "Your wallet is not enough", "warning");
            } else {
              dispatch(setAmout(walletAmout - total));
              swal(
                "Notify",
                `Current Your WalletAmout: ${walletAmout - total}`,
                "warning"
              );
              toast.success("CheckOut successfully !!");
              dispatch(deleteAllCart());
            }

            dispatch(setLoading(false));
          }, 1500);
        }
      });
    }
  };

  return (
    <div className="max-w-[1200px] flex justify-between flex-col md:flex-row  mx-auto p-5">
      <div className="w-full md:w-[70%] p-5">
        <h1 className="font-semibold text-2xl">CART</h1>
        <div className="flex flex-col justify-center">
          {cartList && cartList.length < 1 && (
            <h2 className="text-center text-xl font-semibold">No Product</h2>
          )}
          {cartList &&
            cartList.map((item) => (
              <ProductCart key={item.id} product={item} />
            ))}
        </div>
      </div>
      <div className="w-full md:w-[30%] p-5">
        <h1 className="font-semibold text-2xl">SUMMARY</h1>
        <div className="bg-gray-100 rounded-md p-5 mt-2">
          <div className="flex justify-between mt-2">
            <p className="text-lg">Count Products</p>
            <p className="text-lg">{cartList.length} Products</p>
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-lg">Total</p>
            <NumberFormat
              className={"bg-transparent text-right text-lg"}
              value={total}
              thousandSeparator={true}
              suffix={" VND"}
            />
          </div>
          <div className="flex justify-between mt-2">
            <p className="text-lg truncate w-[50%]">Your Wallet</p>
            <NumberFormat
              className={"bg-transparent text-right text-lg w-[50%]"}
              value={walletAmout}
              thousandSeparator={true}
              suffix={" VND"}
            />
          </div>
          <button
            onClick={handleCheckOut}
            className="px-5 py-1 w-full mt-3 rounded-md hover:opacity-80 transition-all bg-gradient-to-r from-gray-300 to-red-400"
          >
            CHECK OUT
          </button>
        </div>
      </div>
      {isLoading && (
        <div className="fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center overlay">
          <BarWave color="#60A5FA" width="30px" height="30px" duration="2s" />
        </div>
      )}
    </div>
  );
};

export default Cart;

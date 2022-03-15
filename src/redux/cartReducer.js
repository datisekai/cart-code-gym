import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  productList: [
    {
      id: uuidv4(),
      name: "SAMSUNG GALAXY TAB S8",
      image:
        "http://131mobile.vn//ckfinder/userfiles/images/sanpham/samsung/tabs8bac.jpg",
      inCart: false,
      prices: 18399000,
      sku: "SAMSUNGGALAXY-TAB-S8",
      quantify: 1,
    },
    {
      id: uuidv4(),
      name: "SAMSUNG GALAXY S22+ 5G 256GB",
      image:
        "http://131mobile.vn//ckfinder/userfiles/images/sanpham/samsung/600_samsung_galaxy_s22_plus_chinh_hang_xanh_1.jpg",
      inCart: false,
      prices: 23399000,
      sku: "SAMSUNG-GALAXY-S22+",
      quantify: 5,
    },
    {
      id: uuidv4(),
      name: "IPHONE 13 PRO MAX 512GB",
      image:
        "http://131mobile.vn//ckfinder/userfiles/images/sanpham/iphone/13%20pro%20max/13%20pm%20gold.jpg",
      inCart: false,
      prices: 34799000,
      sku: "IPHONE-13-PRO-MAX-512GB",
      quantify: 80,
    },
    {
      id: uuidv4(),
      name: "SAMSUNG GALAXY TAB S&",
      image:
        "http://131mobile.vn//ckfinder/userfiles/images/sanpham/samsung/tabs8bac.jpg",
      inCart: false,
      prices: 18399000,
      sku: "SAMSUNGGALAXY-TAB-S7",
      quantify: 90,
    },
  ],
  cartList: [],
  walletAmout: 100000000,
  isLoading: false,
};

const cartReducer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { cartList } = { ...state };
      const foundProduct = cartList.filter(
        (item) => item.sku === action.payload.sku
      );
      if (foundProduct.length > 0) {
        const newCart = cartList.map((item) => {
          if (item.sku === action.payload.sku) {
            return { ...item, quantify: item.quantify + 1 };
          }
          return item;
        });
        return {
          ...state,
          cartList: newCart,
          isLoading: false,
        };
      }

      return {
        ...state,
        cartList: [...state.cartList, action.payload],
        isLoading: false,
      };
    },
    decreaseProduct: (state, action) => {
      const { productList } = { ...state };
      const newProduct = productList.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantify: item.quantify - 1 };
        }
        return item;
      });
      return {
        ...state,
        productList: newProduct,
      };
    },
    setLoading: (state, action) => {
      return { ...state, isLoading: action.payload };
    },
    setAmout: (state, action) => {
      return { ...state, walletAmout: action.payload };
    },
    deleteAllCart: (state, action) => {
      return { ...state, cartList: [] };
    },
  },
});

export const {
  addToCart,
  decreaseProduct,
  setLoading,
  setAmout,
  deleteAllCart,
} = cartReducer.actions;
export default cartReducer.reducer;

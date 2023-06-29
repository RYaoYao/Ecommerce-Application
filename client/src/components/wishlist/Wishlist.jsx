import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import styles from "../../styles/styles";
import { IoBagHandleOutline } from "react-icons/io5";
import {BsCartPlus} from "react-icons/bs"
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
const Wishlist = ({ setOpenWishList }) => {
  const cartData = [
    {
      name: "Iphone 14 pro max 256gb ssd and 8gb ram silver  color",
      description: "lorem ipsum",
      price: 999,
    },
    {
      name: "Iphone 14 pro max 256gb ssd and 8gb ram silver  color",
      description: "lorem ipsum",
      price: 554,
    },
    {
      name: "Iphone 14 pro max 256gb ssd and 8gb ram silver  color",
      description: "lorem ipsum",
      price: 854,
    },
  ];
  return (
    <div className="fixed top-0 left-0 w-full bg-[#00000059] h-screen z-10">
      <div className="fixed top-0 right-0 min-h-full w-[25%] bg-white flex flex-col justify-between shadow-sm">
        <div className="">
          <div className="flex w-full justify-end pt-5 pr-5">
            <RxCross1
              size={25}
              className="cursor-pointer"
              onClick={() => setOpenWishList(false)}
            />
          </div>
          {/*Item lenggth*/}
          <div className={`${styles.noramlFlex} p-4`}>
            <AiOutlineHeart size={25} />
            <h5 className="pl-2 text-[20px] font-[500]">3 items</h5>
          </div>
          {/* cart items */}
          <br />
          <div className="w-full border-t">
            {cartData &&
              cartData.map((i, index) => <CartSingle key={index} data={i} />)}
          </div>
        </div>
        
      </div>
    </div>
  );
};

const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className="border-b p-4">
      <div className="w-full flex items-center">
        <RxCross1 className="cursor-pointer" />
        <img src="https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/460324/item/phgoods_67_460324.jpg?width=750" alt="" className="w-[80px] h-p80px ml-2" />
        
        <div className="pl-[5px]">
            <h1>{data.name}</h1>
            <h4 className="font-[600] text-[17px] pt-[3px] font-Roboto text-[#d02222] ">Php {totalPrice}</h4>
        </div>
        <div className="">
          <BsCartPlus size={20} className="cursor-pointer" title="Add to card" />
        </div>
      </div>
    </div>
  );
};
export default Wishlist;

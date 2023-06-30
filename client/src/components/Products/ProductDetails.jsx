import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../../styles/styles";


import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineMessage,
  AiOutlineShoppingCart,
} from "react-icons/ai";
const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [select, setSelect] = useState(1);
  const [click, setClick] = useState(false);

  const navigate = useNavigate();
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleMessageSubmit = () => {
    navigate("/inbox?converstaio=507dasdsaad5v41ds");
  };
  return (
    <div className="bg-white">
      {data ? (
        <div className={`unset ${styles.section} w-[90%] 800px:w-[80%]`}>
          <div className="w-full py-5">
            <div className="block w-full 800px:flex">
              <div className="w-full 800px:w-[50%]">
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className="w-[80%]"
                />
                <div className="w-full flex">
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[0].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(0)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                  <div
                    className={`${
                      select === 0 ? "border" : "null"
                    } cursor-pointer`}
                  >
                    <img
                      src={data?.image_Url[1].url}
                      alt=""
                      className="h-[200px]"
                      onClick={() => setSelect(1)}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full 800px:w-[50%]">
                <div className="w-full 800px:w-[80%] pt-5">
                  <h1 className={`${styles.productTitle}`}>{data.name}</h1>
                  <p>{data.description}</p>
                  <div className="flex pt-3">
                    <h4 className={`${styles.discount_price}`}>
                      Php {data.discount_price}
                    </h4>
                    <h3 className={`${styles.price}`}>
                      {data.price ? "Php " + data.price : null}
                    </h3>
                  </div>
                  <div className="flex items-center mt-12 justify-between pr-3">
                    <div className="">
                      <button
                        className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-r px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                        onClick={decrementCount}
                      >
                        -
                      </button>
                      <span className="bg-gray-200 text-gray-800 font-medium px-4 py-[11px] rounded-lg">
                        {count}
                      </span>
                      <button
                        className="bg-gradient-to-r from-teal-400 to-teal-500 text-white font-bold rounded-l px-4 py-2 shadow-lg hover:opacity-75 transition duration-300 ease-in-out"
                        onClick={incrementCount}
                      >
                        +
                      </button>
                    </div>
                    <div className="">
                      {click ? (
                        <AiFillHeart
                          size={30}
                          className="cursor-pointer "
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title="Remove from wishlist"
                        />
                      ) : (
                        <AiOutlineHeart
                          size={30}
                          className="cursor-pointer "
                          onClick={() => setClick(!click)}
                          color={click ? "red" : "#333"}
                          title="Add to wishlist"
                        />
                      )}
                    </div>
                  </div>
                  <div
                    className={`${styles.button} mt-6 !rounded !h-11 flex items-center`}
                  >
                    <span className="text-white flex items-center">
                      Add to card <AiOutlineShoppingCart className="ml-1" />
                    </span>
                  </div>
                  <div className="flex items-center pt-8">
                    <img
                      src={data.shop.shop_avatar.url}
                      alt=""
                      className="w-[70px] h-[70px] rounded-full mr-2"
                    />
                    <div className="">
                      <h3
                        className={`${styles.shop_name} pb-1 pt-1 text-[18px]`}
                      >
                        {data.shop.name}
                      </h3>
                      <h5 className="pb-3 text-[16px]">
                        ({data.shop.ratings}) ratings
                      </h5>
                    </div>
                    <div
                      className={`${styles.button} bg-[#6443d1] mt-4 !rounded !h-11 ml-5`}
                      onClick={handleMessageSubmit}
                    >
                      <span className=" text-white flex items-center">
                        Send Message <AiOutlineMessage className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductDetailsInfor data={data} />
          
        </div>
      ) : null}
    </div>
  );
};

const ProductDetailsInfor = ({data}) => {
  const [active, setActive] = useState(1);
  return (
    <div className="bg-[#f5f6fb] px-3 800px:px10 py-2 rounded">
      <div className="w-full flex justify-between border-b pt-10 pb-2">
        <div className="relative ">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(1)}
          >
            Product Details
          </h5>
          {active === 1? (
            <div className={`${styles.active_indicator}`}/>
          ): null}
        </div>
        <div className="relative ">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(2)}
          >
            Product Reviews
          </h5>
          {active === 2 ? (
            <div className={`${styles.active_indicator}`}/>
          ): null}
        </div>
        <div className="relative ">
          <h5
            className="text-[#000] text-[18px] px-1 leading-5 font-[600] cursor-pointer 800px:text-[20px]"
            onClick={() => setActive(3)}
          >
            About the Seller
          </h5>
          {active === 3 ? (
            <div className={`${styles.active_indicator}`}/>
          ): null}
        </div>
      </div>
          {active === 1 ? (
             
                <>
                  <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Gravida cum sociis natoque penatibus et magnis. Odio
                    ut enim blandit volutpat maecenas volutpat. Vitae aliquet
                    nec ullamcorper sit amet. Suspendisse faucibus interdum
                    posuere lorem ipsum. Pretium aenean pharetra magna ac
                    placerat vestibulum lectus mauris ultrices. Tincidunt
                    praesent semper feugiat nibh sed. Sed ullamcorper morbi
                    tincidunt ornare massa eget egestas purus viverra. Id
                    aliquet lectus proin nibh nisl. Nec ullamcorper sit amet
                    risus nullam eget felis eget. Egestas pretium aenean
                    pharetra magna ac. Suspendisse interdum consectetur libero
                    id faucibus nisl tincidunt eget nullam. Tellus pellentesque
                    eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                    Sed libero enim sed faucibus turpis. Etiam dignissim diam
                    quis enim lobortis scelerisque.
                  </p>
                  <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Gravida cum sociis natoque penatibus et magnis. Odio
                    ut enim blandit volutpat maecenas volutpat. Vitae aliquet
                    nec ullamcorper sit amet. Suspendisse faucibus interdum
                    posuere lorem ipsum. Pretium aenean pharetra magna ac
                    placerat vestibulum lectus mauris ultrices. Tincidunt
                    praesent semper feugiat nibh sed. Sed ullamcorper morbi
                    tincidunt ornare massa eget egestas purus viverra. Id
                    aliquet lectus proin nibh nisl. Nec ullamcorper sit amet
                    risus nullam eget felis eget. Egestas pretium aenean
                    pharetra magna ac. Suspendisse interdum consectetur libero
                    id faucibus nisl tincidunt eget nullam. Tellus pellentesque
                    eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                    Sed libero enim sed faucibus turpis. Etiam dignissim diam
                    quis enim lobortis scelerisque.
                  </p>
                  <p className="py-2 text-[18px] leading-8 pb-10 whitespace-pre-line">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Gravida cum sociis natoque penatibus et magnis. Odio
                    ut enim blandit volutpat maecenas volutpat. Vitae aliquet
                    nec ullamcorper sit amet. Suspendisse faucibus interdum
                    posuere lorem ipsum. Pretium aenean pharetra magna ac
                    placerat vestibulum lectus mauris ultrices. Tincidunt
                    praesent semper feugiat nibh sed. Sed ullamcorper morbi
                    tincidunt ornare massa eget egestas purus viverra. Id
                    aliquet lectus proin nibh nisl. Nec ullamcorper sit amet
                    risus nullam eget felis eget. Egestas pretium aenean
                    pharetra magna ac. Suspendisse interdum consectetur libero
                    id faucibus nisl tincidunt eget nullam. Tellus pellentesque
                    eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                    Sed libero enim sed faucibus turpis. Etiam dignissim diam
                    quis enim lobortis scelerisque.
                  </p>
                </>
           
          ) : null}
          {active === 2 ? (
             
             <div className="w-full justify-center min-h-[40vh] flex items-center">
              <p>No Reviews Yet</p>
             </div>
       ) : null}
       {active === 3 ? (
             <div className="w-full block 800px:flex p-5">
              <div className="w-full 800px:w-[50%]">
                <div className="flex items-center">
                  <img src={data.shop.shop_avatar.url} alt="" className="w-[50px] h-[50px] rounded-full" />
                  <div className="pl-3">
                    <h3 className={`${styles.shop_name}`}>{data.shop.name}</h3>
                    <h5 className="pb-2 text-[15px]">
                      ({data.shop.ratings}) Ratings
                    </h5>
                  </div>
                </div>
                <p className="py-2 leading-8 text-[18px]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Gravida cum sociis natoque penatibus et magnis. Odio
                    ut enim blandit volutpat maecenas volutpat. Vitae aliquet
                    nec ullamcorper sit amet. Suspendisse faucibus interdum
                    posuere lorem ipsum. Pretium aenean pharetra magna ac
                    placerat vestibulum lectus mauris ultrices. Tincidunt
                    praesent semper feugiat nibh sed. Sed ullamcorper morbi
                    tincidunt ornare massa eget egestas purus viverra. Id
                    aliquet lectus proin nibh nisl. Nec ullamcorper sit amet
                    risus nullam eget felis eget. Egestas pretium aenean
                    pharetra magna ac. Suspendisse interdum consectetur libero
                    id faucibus nisl tincidunt eget nullam. Tellus pellentesque
                    eu tincidunt tortor aliquam nulla facilisi cras fermentum.
                    Sed libero enim sed faucibus turpis. Etiam dignissim diam
                    quis enim lobortis scelerisque.
                  </p>
              </div>
              <div className="w-full 800px:w-[50%] mt-5 800px:mt-0 800px:flex flex-col items-end">
                <div className="text-left">
                  <h5 className="font-[600]">Joined on: <span className="font-[500]">June 30, 2023</span></h5>
                  <h5 className="font-[600]">Products Sold: <span className="font-[500]">5,000</span></h5>
                  <h5 className="font-[600]">Reviews: <span className="font-[500]">324</span></h5>
                  <Link to="/">
                    <div className={`${styles.button} !rounded-[4px] !h-[39.5px] !mt-3`}>
                    <h4 className="text-white">Visit Shop</h4>
                    </div>
                  </Link>
                 
                </div>
              </div>
             </div>
            
        
       ) : null}
    </div>
  );
};
export default ProductDetails;

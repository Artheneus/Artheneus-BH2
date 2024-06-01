import React from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addtoCart } from "../redux/cartSlice";
import { CartContext } from "./CartContext";
import { useContext } from "react";
// import AddCart from "./AddCartPC";

const ProdsPrintM = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  console.log(cart.items);
  const productQuantity = cart.getProductQuantity(product);

  const step = 1;
  const [nums, setNums] = useState(0);

  const increment = (step) => {
    setNums(nums + step);
  };

  const decrement = (step) => {
    if (nums === 0) {
      return 0;
    } else {
      setNums(nums - step);
    }
  };

  return (
    <div className="">
      <span className="text-[16pt] pt-1">{product.title}</span>
      <div className="flex pt-1 justify-center mt-2">
        <button
          className="bg-black w-[50px] rounded-md font-sm mx-2 py-1 text-[#00df9a] items-center"
          onClick={() => increment(step)}
        >
          +
        </button>
        <p className="flex bg-black w-[100px] rounded-md font-sm mx-2 justify-center text-[#00df9a] items-center">
          {nums}
        </p>
        <button
          className="bg-black w-[50px] rounded-md font-sm mx-2 text-[#00df9a] items-center"
          onClick={() => decrement(step)}
        >
          -
        </button>
      </div>
      <div className="flex justify-center">
        <button
          // onClick={() => dispatch(addtoCart({ title }))}
          onClick={() => cart.addOneToCart(product.id)}
          className="bg-black w-[240px] rounded-md font-sm mx-2 py-1 my-2 text-[#00df9a] items-center"
        >
          Add to Cart
        </button>
      </div>

      {/* <div className="flex"></div> */}
    </div>
  );
};

export default ProdsPrintM;

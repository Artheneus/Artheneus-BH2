import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";
import { CartContext } from "./CartContext";
import { useContext } from "react";

const AddCartPC = (props) => {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product);
  // const product = props.product;
  // const id = props.id;

  const step = 1;
  const [nums, setNums] = useState(0);
  const dispatch = useDispatch();

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
    <div className="flex">
      <button
        className="bg-black w-[50px] rounded-md font-sm mx-2 py-1 text-[#00df9a] items-center"
        onClick={() => increment(step)}
      >
        +
      </button>
      <p className="flex bg-black w-[100px] rounded-md font-sm mx-2 justify-center pt-0.5 text-[#00df9a] items-center">
        {nums}
      </p>
      <button
        className="bg-black w-[50px] rounded-md font-sm mx-2 text-[#00df9a] items-center"
        onClick={() => decrement(step)}
      >
        -
      </button>
      <button
        // onClick={() => dispatch(addtoCart(id, title, price))}
        onClick={() => cart.addOneToCart(product.id)}
        className="bg-black w-[200px] rounded-md font-sm mx-2 py-1 text-[#00df9a] items-center"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddCartPC;

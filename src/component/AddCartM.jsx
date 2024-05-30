import React from "react";
import { useState } from "react";
import armory from "../assets/logo-armory.png";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const AddCart = (props) => {
  const step = 1;
  const title = props.title;
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
    <div className="mt-3">
      <div className="flex pt-1 justify-center">
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
          onClick={() => dispatch(addtoCart({ title }))}
          className="bg-black w-[240px] rounded-md font-sm mx-2 py-1 my-2 text-[#00df9a] items-center"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default AddCart;

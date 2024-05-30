import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/cartSlice";

const AddCart = (id, title, price) => {
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
        onClick={() => dispatch(addtoCart(id, title, price))}
        className="bg-black w-[200px] rounded-md font-sm mx-2 py-1 text-[#00df9a] items-center"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddCart;

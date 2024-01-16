import { FaHeart } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import Microphone from "../assets/microphone.jpg";

const ShoppingCard = () => {
  return (
    <div className="box">
      <div className="border shadow-xl p-3 space-y-5 md:w-[600px] md:flex md:gap-6 ">
        <img src={Microphone} alt="" className="md:py-3 md:object-contain" />
        <div className="">
          <h2 className="text-2xl font-bold mb-10">
            HyperX QuadCast S - USB Microphone (Black-Grey) - RGB Lighting
          </h2>
          <span className="text-sm text-gray-500 block mb-1 line-through">
            $159.90
          </span>
          <span className="text-4xl font-bold  block">$150</span>
          <div className="flex items-center gap-5 my-4">
            <button className="btn w-4/5">Add to Cart</button>
            <FaHeart className="text-4xl text-red-600 border p-1 border-rose-600 rounded-lg" />
          </div>
          <div className="flex items-center gap-1">
            <GoDotFill className="text-red-600 text-xl" />
            <p>4 + pcs,In Stock</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;

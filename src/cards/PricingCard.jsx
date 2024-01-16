import { HiCheck } from "react-icons/hi";

const PricingCard = () => {
  const arr = [1, 2, 3, 4];

  return (
    <div className="p-4 md:box">
      <div className="flex flex-col gap-6 md:flex-row md:w-[1000px]">
        <div className="border shadow-2xl px-4 py-10 rounded-xl">
          <div className="w-1/2 mb-10">
            <div className="text-sm ">Basic</div>
            <p className="text-4xl font-bold mb-4">Free</p>
            <button className="w-full btn">sign up</button>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vel
            explicabo maiores natus optio ut est itaque ipsum odio quasi.
          </p>
          {arr.map((index) => (
            <div
              key={index}
              className="flex items-center gap-2 space-y-2 text-sm"
            >
              <HiCheck className="text-lg" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
          ))}
          <div className="text-sm font-bold mt-7">view more pricing</div>
        </div>
        <div className="border shadow-2xl rounded-xl overflow-hidden">
          <div className="text-sm text-center bg-slate-500 text-white ">
            Recommended
          </div>
          <div className="p-4">
            <div className="w-1/2 mb-10">
              <div className="text-sm ">Pro</div>
              <div className="flex items-center">
                <p className="text-4xl font-bold mb-4">$100/</p>
                <p className="text-xs">Month</p>
              </div>
              <button className="w-full btn">sign up</button>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
              vel explicabo maiores natus optio ut est itaque ipsum odio quasi.
            </p>
            {arr.map((index) => (
              <div
                key={index}
                className="flex items-center gap-2 space-y-2 text-sm "
              >
                <HiCheck className="text-lg" />

                <p>Lorem ipsum dolor sit amet, consecte adipisicing elit</p>
              </div>
            ))}
            <div className="text-sm font-bold mt-7">view more pricing</div>
          </div>
        </div>
        <div className="border shadow-2xl px-4 py-10  rounded-xl">
          <div className="w-1/2 mb-10">
            <div className="text-sm ">Basic</div>
            <p className="text-4xl font-bold mb-4">Free</p>
            <button className="w-full btn">sign up</button>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vel
            explicabo maiores natus optio ut est itaque ipsum odio quasi.
          </p>
          {arr.map((index) => (
            <div
              key={index}
              className="flex items-center gap-2 space-y-2 text-sm"
            >
              <HiCheck className="text-lg" />
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
            </div>
          ))}
          <div className="text-sm font-bold mt-7">view more pricing</div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;

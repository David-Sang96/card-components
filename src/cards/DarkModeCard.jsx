import { useState } from "react";
import Cat from "../assets/Tabby_cat.jpg";
import "./style.css";

const DarkModeCard = () => {
  const [darkmode, setDarkMode] = useState(localStorage.getItem("theme") || "");

  if (darkmode) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }

  return (
    <div className="box ">
      <div
        className={`p-2 md:px-2 border shadow-md rounded-lg space-y-4 md:flex md:items-center md:gap-10 md:w-[600px] md:h-[330px] ${
          darkmode ? "dark:bg-slate-600 text-white" : ""
        }`}
      >
        <img src={Cat} alt="" className="rounded-md w-4/5 mx-auto md:w-[42%]" />
        <div className="md:pb-5 space-y-2 ">
          <div>
            <h2 className="text-2xl font-bold text-center md:text-start">
              I am funny cat.
            </h2>
            <p>Feb 4 2023</p>
          </div>
          <p>
            The cat, commonly referred to as the domestic cat or house cat, is
            the only domesticated species in the family Felidae. Recent advances
            in archaeology and genetics have shown that the domestication of the
            cat occurred in the Near East around 7500 BC
          </p>
          <div className="mb-4">
            <button className="btn ">See More</button>
          </div>
          <label className="relative inline-flex items-center me-5 cursor-pointer ">
            <input
              type="checkbox"
              value={darkmode}
              className="sr-only peer"
              onChange={(e) => setDarkMode(e.target.checked)}
              checked={darkmode}
            />
            <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-teal-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Teal
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default DarkModeCard;

import Cat from "../assets/Tabby_cat.jpg";

const CatCard = () => {
  return (
    <div className="box">
      <div className="p-2 md:px-2 border shadow-md rounded-lg space-y-4 md:flex md:items-center md:gap-10 md:w-[600px] md:h-[330px] ">
        <img src={Cat} alt="" className="rounded-md w-4/5 mx-auto md:w-[42%]" />
        <div className="md:pb-5">
          <div className=" mb-5 ">
            <h2 className="text-2xl font-bold text-center md:text-start">
              I am funny cat.
            </h2>
            <p className="text-slate-500">Feb 4 2023</p>
          </div>
          <p className="text-slate-500 mb-4 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora
            eius exercitationem temporibus commodi, perferendis alias modi vitae
            doloremque eum? Qui cumque impedit eaque hic consectetur! Eligendi
            cupiditate amet fugiat dolore!
          </p>
          <div>
            <button className="btn">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;

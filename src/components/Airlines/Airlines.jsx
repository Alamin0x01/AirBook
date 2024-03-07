import biman from "../../assets/Resources/Airlines Icon/BBA.png";
import emirates from "../../assets/Resources/Airlines Icon/Emirates.png";
import turkish from "../../assets/Resources/Airlines Icon/Turkish Airlines.png";
import malaysia from "../../assets/Resources/Airlines Icon/Malaysia.png";
import singapore from "../../assets/Resources/Airlines Icon/Singapore Airlines.png";
import american from "../../assets/Resources/Airlines Icon/american.png";

const Airlines = () => {
  return (
    <div className="mt-10 lg:max-w-6xl lg:mx-auto p-2">
      <h1 className="text-3xl font-semibold mb-5 text-black">
        Popular Airlines
      </h1>
      {/* cards */}
      <div className="flex flex-col">
        {/* row-1 */}
        <div className="flex flex-col lg:flex-row justify-around lg:justify-center items-center gap-4">
          {/* card-1 */}
          <div className="w-64 p-2 space-y-2  rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={biman} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">
                  Biman Bangladesh Airlines
                </span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  4 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="w-64 p-2 space-y-2  rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={emirates} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">Emirates</span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  5 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="w-64 p-2 space-y-2 rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={turkish} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">Turkish Airlines</span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  5 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="w-64 p-2 space-y-2   rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={malaysia} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">
                  Malaysia Airlines
                </span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  5 ( 783 review )
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* row-2 */}
        <div className="flex flex-col lg:flex-row justify-around lg:justify-center items-center gap-4">
          {/* card-1 */}
          <div className="w-64 p-2 space-y-2  rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={singapore} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">
                  Singapore Airlines
                </span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  5 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="w-64 p-2 space-y-2  rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={malaysia} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">
                  Malaysia Airlines
                </span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  3 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="w-64 p-2 space-y-2 rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={biman} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">
                  Biman Bangladesh Airlines
                </span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  4 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="w-64 p-2 space-y-2   rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={american} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">
                  american airlines
                </span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  5 ( 783 review )
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* row-3 */}
        <div className="flex flex-col lg:flex-row justify-around lg:justify-center items-center gap-4">
          {/* card-1 */}
          <div className="w-64 p-2 space-y-2  rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={emirates} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">Emirates</span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  5 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-2 */}
          <div className="w-64 p-2 space-y-2  rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={biman} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">
                  Biman Bangladesh Airlines
                </span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  4 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-3 */}
          <div className="w-64 p-2 space-y-2 rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={malaysia} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">
                  Malaysia Airlines
                </span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  5 ( 783 review )
                </p>
              </div>
            </div>
          </div>
          {/* card-4 */}
          <div className="w-64 p-2 space-y-2   rounded-lg flex flex-row items-center gap-2">
            <img className="w-10 h-10" src={turkish} alt="" />
            <div className="flex flex-col gap-y-1">
              <p className="">
                <span className="text-[14px] font-[600]">Turkish Airlines</span>
              </p>
              <div className="rating rating-sm flex flex-row items-center gap-2">
                <input
                  type="radio"
                  name="rating-5"
                  className="mask mask-star-2 bg-orange-400"
                />

                <p className="text[12px] font-[300] text-[#09182E]">
                  5 ( 783 review )
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airlines;

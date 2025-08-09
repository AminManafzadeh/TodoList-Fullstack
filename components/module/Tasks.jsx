import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { RiMastodonLine } from "react-icons/ri";

function Tasks({ data, next, back, fetchTodos }) {
  return (
    <div className="">
      {data?.map((item) => (
        <div
          key={item._id}
          className="shadow-custom p-[10px] my-[25px] mx-[15px] tasks"
        >
          <span className={item.status}></span>
          <RiMastodonLine />
          <h4 className="font-semibold text-slategray text-lg">{item.title}</h4>
          <div className="flex items-center justify-between">
            {back ? (
              <button className="bg-[#f8eccf] text-[#e5a000] py-[5px] px-[10px] border-none rounded-[5px] flex items-center">
                <BiLeftArrow /> Back
              </button>
            ) : null}
            {next ? (
              <button className="bg-[#cdf8ee] text-[ #03ab81] py-[5px] px-[10px] border-none rounded-[5px] flex items-center">
                Next <BiRightArrow />
              </button>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Tasks;

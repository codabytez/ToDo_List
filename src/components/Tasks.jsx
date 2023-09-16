import { HiOutlineTrash } from "react-icons/hi";

const tasks = ({
  id,
  title,
  completed,
  description,
  onCompleted,
  onDelete,
}) => {
  const underline = ` ${completed && "line-through"}`;
  const complete = `${completed && "text-[#777]"} `;

  return (
    <>
      <div
        key={id}
        className="bg-[#262626]  my-2 rounded-lg flex items-center p-4 "
      >
        <div className="relative w-6 h-6 ">
          <input
            type="checkbox"
            defaultChecked={completed}
            onChange={() => onCompleted(id)}
            className="peer shrink-0 appearance-none w-4 h-4 border-2 border-[#4ea8de] rounded-full mt-1 checked:bg-[#5e60ce] checked:border-0 hover:bg-[#333]"
          />
          <svg
            className="absolute top-1 left-1 w-2 h-2 mt-1 hidden peer-checked:block pointer-events-none"
            xmlns="http://w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div
          className={`px-2 text-sm ${
            completed ? "text-[#888]" : "text-[#f2f2f2]"
          } ${underline} w-[90%] `}
        >
          <h3 className="uppercase font-bold">{title}</h3>
          <p
            className={` text-xs pt-2 break-all ${
              completed ? "text-[#888]" : "text-[#d5d5d5]"
            }`}
          >
            {description}
          </p>
        </div>
        <button
          onClick={() => onDelete(id)}
          className="text-[#808080] p-2 rounded-md transition-all hover:text-[#E25858] hover:bg-[#333333]"
        >
          <HiOutlineTrash className="w-5 h-5" />
        </button>
      </div>
    </>
  );
};

export default tasks;

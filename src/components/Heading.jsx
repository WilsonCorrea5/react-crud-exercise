import { Link } from "react-router-dom";

export const Heading = () => {
  return (
    <div>
      <div className="flex item-center mb-10">
        <Link to={"/"}>
          <h5 className="text-gray-700 outline-blue-500 hover:shadow-2xl rounded px-1 font-bold text-2xl">
            TaskCrud
          </h5>
        </Link>
        <div className="flex-grow text-right px-4 py-2 m-2">
          <Link to={"/add"}>
            <button className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex item-center">
              Add task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

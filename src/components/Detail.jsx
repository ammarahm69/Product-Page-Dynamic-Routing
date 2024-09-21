import React from "react";
import { useParams } from "react-router-dom";
import { userData } from "../utils/data";
import { Link } from "react-router-dom";
function Detail() {
  const { id } = useParams();
  const user = userData.find((user) => user.id === parseInt(id));

  if (!user) {
    return <h2>User not found</h2>;
  }

  return (
    <div className="flex justify-center items-center h-screen bg-slate-500">
      <div className="border-black border-2 w-[700px] h-[500px] bg-gray-300 shadow-lg rounded-lg p-4">
        <div className="flex flex-col items-center">
          <img
            src={user.profileImage}
            alt={`${user.name}'s profile`}
            className="w-32 h-32 rounded-full border-4 border-gray-200 mb-4"
          />
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <h2 className="text-xl text-gray-600">{user.profession}</h2>
          <p className="mt-2 text-gray-700 text-center">{user.description}</p>
          <a
            href={user.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
          >
            View Full Profile
          </a>
          <Link to={"/"}> <button className="p-1 bg-[#3D7793] rounded-lg text-white mt-10 px-5">Go back</button></Link>
        </div>
      </div>
    </div>
  );
}

export default Detail;

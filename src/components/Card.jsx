import React from "react";
import Baackground from "../assets/bg.jpg";
import Profile from "../assets/man.avif";
import { userData } from "../utils/data";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="flex flex-wrap justify-center">
      {userData.map((item) => (
        <div className="w-64 h-96 border-2 relative m-5" key={item.id}>
          {/* Image div */}
          <div>
            <img src={item.background} alt="Background" />
          </div>
          {/* Profile div */}
          <div>
            <img
              src={item.profileImage || <FaRegUser />}
              alt="Profile"
              className="w-24 h-24 rounded-full absolute top-24 left-20 border-4"
            />
          </div>
          {/* Description div */}
          <div className="mt-9 flex flex-col items-center">
            <div className="text-2xl">{item.name}</div>
            {/* Profession */}
            <div className="text-blue-400">{item.profession}</div>
            {/* Description */}
            <div
              className="text-gray-400 text-center"
              style={{ fontSize: "12px" }}
            >
              {item.description}
            </div>
            {/* View Profile Button */}
            <div className="p-1 bg-[#3D7793] rounded-lg text-white mt-10 px-5">
              <Link to={`/user/${item.id}`}>
                <button>View Profile</button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;

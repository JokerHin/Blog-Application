import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="flex justify-between">
      <h3 className="font-bold text-2xl">Mern Blog App</h3>
      <ul className="flex list-none gap-[20px]">
        <Link to={"/"}>
          <li className="text-lg font-semibold cursor-pointer hover:underline active:text-blue-400">
            Home
          </li>
        </Link>
        <Link to={"/add-blog"}>
          <li className="text-lg font-semibold cursor-pointer hover:underline active:text-blue-400">
            Add Blog
          </li>
        </Link>
      </ul>
    </div>
  );
}

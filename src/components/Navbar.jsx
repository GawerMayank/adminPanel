import React from "react";

const Navbar = () => {
  return (
    <>
      <h1 className="text-center text-7xl mt-5 text-zinc-400 font-semibold">
        ADMIN PANEL
      </h1>
      <p className="text-center text-xl text-zinc-500 mt-5">
        Made using react & redux-toolkit
      </p>
      <div className="flex justify-center items-center mt-10">
        <ul className="flex gap-20 text-3xl bg-zinc-100 px-7 py-2 rounded text-zinc-500">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Code</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

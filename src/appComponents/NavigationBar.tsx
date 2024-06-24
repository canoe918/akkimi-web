"use client";

import { useState } from "react";

export default function NavigationBar() {
  const [open, setOpen] = useState(false);

  const handleMenuClose = () => {
    setOpen(false);
  };

  const handleMenuClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <nav className="fixed max-w-[44rem] min-h-[7rem] -translate-x-1/2 top-0 left-1/2 flex justify-between w-full p-12 backdrop-blur-sm">
        <div className="flex gap-x-8">
          {!open ? (
            <button className="" onClick={handleMenuClick}>
              Menu
            </button>
          ) : (
            <button onClick={handleMenuClose}>Back</button>
          )}
          <div>Logo</div>
        </div>

        <div>
          <button>Profile</button>
        </div>
      </nav>

      {open && (
        <div className="fixed overflow-y-scroll z-[5] max-w-[44rem] -translate-x-1/2 top-[7rem] left-1/2 w-full h-full bg-gray-200">
          <ul>
            {["어학", "창업", "자격증", "더 많은 카테고리"].map(
              (item, index) => {
                return <li key={index}>{item}</li>;
              },
            )}
          </ul>
        </div>
      )}
    </>
  );
}

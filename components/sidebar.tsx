import React from "react";
import CanvasIcon from "@/assets/canvas.svg";
import SnipxIcon from "@/assets/snip.svg";
import ProfileIcon from "@/assets/profile.svg";
import LoginIcon from "@/assets/login.svg";
import Image from "next/image";
import Link from "next/link";

function Sidebar() {
  const links = [
    {
      name: "canvas",
      link: "create",
      icon: CanvasIcon,
    },

    {
      name: "snipx",
      link: "snipx",
      icon: SnipxIcon,
    },
    {
      name: "profile",
      link: "profile",
      icon: ProfileIcon,
    },

    {
      name: "login ",
      link: "login",
      icon: LoginIcon,
    },
  ];
  return (
    <aside
      className="w-[323px] pt-[112px]
    
    pb-[55px]
    bg-primary h-screen"
    >
      <button
        className="bg-[#fff]  w-[163px]

        mb-[97px]
        mx-auto
font-semibold rounded-lg flex items-center text
px-[24px] py-[16px] text-primary"
      >
        Create New
        <svg
          className="mr-[4px]"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4.16666V15.8333M4.16669 9.99999H15.8334"
            stroke="#0D102A"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <div className="">
        {links.map((link) => {
          return (
            <Link
              href={link.link}
              className="text-white font-semibold
              space-x-[4px]
          flex py-[16px] px-[80px] capitalize mb-[20px]
          "
            >
              <Image src={link.icon} alt={link.name} />

              <p>
              {link.name}
                </p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;

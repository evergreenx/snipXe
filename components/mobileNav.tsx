"use client";

import React from "react";
import { useToggle } from "usehooks-ts";
import CanvasIcon from "@/assets/canvas.svg";
import SnipxIcon from "@/assets/snip.svg";
import ProfileIcon from "@/assets/profile.svg";
import LoginIcon from "@/assets/login.svg";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Session } from "@supabase/supabase-js";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav({ session }: { session: Session | null }) {
  const router = useRouter();
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
      name: "login ",
      link: "login",
      icon: LoginIcon,
    },
  ];
  const [value, toggle, setValue] = useToggle(true);

  if (session) {
    delete links[2];
  }

  if (!session) {
    delete links[1];
  }
  return (
    <div className="mobile-nav justify-start lg:hidden">
      {value ? (
        <motion.svg
          initial={false}
          animate={value ? true : false}
          variants={{
            open: { rotate: 0 },
            closed: { rotate: 90 },
          }}
          width="30"
          onClick={() => toggle()}
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 18H10"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 12L16 12"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
          <path
            d="M4 6L20 6"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
          />
        </motion.svg>
      ) : (
        <motion.svg
        initial={false}
        animate={value ? false : true}
        variants={{
          open: { rotate: 0 },
          closed: { rotate: 90 },
        }}
          fill="#000000"
          onClick={() => toggle()}
          height="20"
          width="20"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 460.775 460.775"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z"></path>{" "}
          </g>
        </motion.svg>
      )}
      <AnimatePresence>
        {value ? null : (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="w-full top-[95px] bg-white h-auto absolute left-0"
          >
            {links.map((link) => {
              return (
                <div
                  onClick={() => {
                    router.push(link.link);
                    toggle();
                  }}
                  className="text-black font-medium
          space-x-[4px] items-center
      flex py-[10px] px-5 capitalize text-base
      "
                >
                  <Image src={link.icon} alt={link.name} />

                  <p>{link.name}</p>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsShare } from "react-icons/bs";
import { FaHistory } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { MdOutlineReviews } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sideList = [
    {
      icon: <MdOutlineReviews className="text-2xl" />,
      title: "Review",
      path: "/review",
    },
    {
      icon: <FaHistory className="text-xl" />,
      title: "History",
      path: "/history",
    },
    {
      icon: <RiMoneyRupeeCircleLine className="text-2xl" />,
      title: "Points",
      path: "/points",
    },
    {
      icon: <MdOutlineReportGmailerrorred className="text-2xl" />,
      title: "Report",
      path: "/report",
    },
    {
      icon: <CgProfile className="text-2xl" />,
      title: "Profile",
      path: "/profile",
    },
    {
      icon: <IoLanguage className="text-2xl" />,
      title: "App Language",
      path: "/review",
    },
    {
      icon: <MdLogout className="text-2xl" />,
      title: "Logout",
      path: "/review",
    },
  ];

  const navList = [
    {
      icon: <AiOutlineHome className="text-2xl mr-2" />,
      title: "item",
    },
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "",
    },
    {
      icon: <AiOutlineHome className="text-2xl" />,
      title: "",
    },
  ];

  const handleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleEscKeyPress = (e: any) => {
      if (e.keyCode === 27 && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.setProperty("overflow", "hidden");
    } else {
      document.body.style.removeProperty("overflow");
    }

    document.addEventListener("keydown", handleEscKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [isOpen]);

  return (
    <nav className="flex items-center justify-between px-4 py-4 h-16 bg-white dark:bg-background text-gray-700 border-b border-gray-200 z-10">
      <button className="mr-2" aria-label="Open Menu" onClick={handleDrawer}>
        <GiHamburgerMenu className="text-3xl dark:text-white/90" />
      </button>

      <h1 className="text-4xl lg:text-5xl text-center font-bold text-primary sm:text-3xl flex-1">
        <Link href="/">ChallanEase</Link>
      </h1>

      <div className="w-10"></div>

      {isOpen && (
        <div className="z-10 fixed inset-0 transition-opacity">
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black opacity-50"
            tabIndex={0}
          ></div>
        </div>
      )}

      <aside
        className={`transform top-0 left-0 w-64 dark:bg-background bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <span className="flex w-full items-center px-4 py-3 border-b ">
          <h1 className="text-4xl lg:text-3xl text-center font-bold text-primary sm:text-3xl">
            <Link href="/">ChallanEase</Link>
          </h1>
        </span>

        {sideList.map(({ icon, title, path }, index) => {
          return (
            <Link key={index} href={"/dashboard"+path}>
              <span
                
                className="flex items-center p-4 hover:bg-blue-500 hover:text-white dark:text-white/80"
              >
                <span className="mr-2">{icon}</span> <span>{title}</span>
              </span>
            </Link>
          );
        })}

        <div className="fixed bottom-0 w-full">
          <div className="mb-4 ml-6">
            <p className="font-bold dark:text-white/80">
              Theme &ensp;
              <ModeToggle />
            </p>
          </div>

          <button className="flex items-center p-4 text-white bg-blue-500 hover:bg-blue-600 w-full">
            <span className="mr-2">
              <BsShare className="text-2xl" />
            </span>

            <span>Invite a friend</span>
          </button>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;

import { useState } from "react";
import ClickOutside from "../ClickOutside";
import Link from "next/link";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { CiSettings, CiLogout } from "react-icons/ci";
import { RiContactsBook3Fill } from "react-icons/ri";
// import { logout } from "@/lib/actions";

const size = 20;

export default function DropdownUser() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
        <div className="relative inline-block text-left">
          <Link
            href="#"
            className="flex items-center gap-4"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="hidden text-right lg:block text-black dark:text-white">
              <span className="block text-sm font-medium ">Min Min</span>
              <span className="block text-xs">Web developer</span>
            </span>

            <span className="h-12 w-12">
              <Image
                width={112}
                height={112}
                src={"/images/user.jpg"}
                style={{
                  width: "auto",
                  height: "auto",
                }}
                alt="User"
                className="rounded-full"
              />
            </span>

            <svg
              className="hidden fill-current sm:block dark:text-white"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.410765 0.910734C0.736202 0.585297 1.26384 0.585297 1.58928 0.910734L6.00002 5.32148L10.4108 0.910734C10.7362 0.585297 11.2638 0.585297 11.5893 0.910734C11.9147 1.23617 11.9147 1.76381 11.5893 2.08924L6.58928 7.08924C6.26384 7.41468 5.7362 7.41468 5.41077 7.08924L0.410765 2.08924C0.0853277 1.76381 0.0853277 1.23617 0.410765 0.910734Z"
                fill=""
              />
            </svg>
          </Link>

          {dropdownOpen && (
            <div className=" origin-top-right absolute right-0 mt-2 w-[250px] rounded-md shadow-default bg-white ring-1 ring-black ring-opacity-5 dark:bg-[#24303F] border dark:border-gray-600">
              <ul className="flex flex-col gap-5 px-6 py-7 border-b border-[#e2e8f0] dark:border-[#2e3a47] text-[#64748B] dark:text-white">
                <li>
                  <Link
                    href="/admin/profile"
                    className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                  >
                    <FaUser size={size} />
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/profile"
                    className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                  >
                    <RiContactsBook3Fill size={size} />
                    My Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings"
                    className="flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base"
                  >
                    <CiSettings size={size} />
                    Settings
                  </Link>
                </li>
              </ul>
              {/* <form action={logout}> */}
                <button className="flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base text-[#64748B] dark:text-white">
                  <CiLogout size={size} />
                  Log Out
                </button>
              {/* </form> */}
            </div>
          )}
        </div>
      </ClickOutside>
    </>
  );
}

import { FaAlignJustify } from "react-icons/fa";

import DropdownNotification from "../header/DropdownNotification";
import DropdownMessage from "../header/DropdownMessage";
import DarkModeSwitcher from "../header/DarkModeSwitcher";
import DropdownUser from "../header/DropdownUser";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="h-14  z-[1034] flex w-full bg-white dark:bg-[#24303F] drop-shadow-1  dark:drop-shadow-none justify-between items-center shadow-2 px-4 py-4 md:px-6 2xl:px-7">
      <div className="">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <FaAlignJustify className="text-gray-500 dark:text-gray-200" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden sm:block">
          <form action="" method="GET" className="flex items-center space-x-2">
            <button>
              <svg
                className="fill-[#64748B] dark:fill-[#AEB7C0] dark:hover:fill-primary"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                  fill=""
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                  fill=""
                />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full bg-transparent pr-4 focus:outline-none xl:w-125"
            />
          </form>
        </div>

        <ul className="flex items-center gap-4">
          <DarkModeSwitcher />
          <DropdownNotification />
          <DropdownMessage />
          <DropdownUser />
        </ul>
      </div>
    </header>
  );
}

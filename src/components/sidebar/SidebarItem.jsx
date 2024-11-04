import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarDropdown from "./SidebarDropdown";
import { useEffect, useState } from "react";

export default function SidebarItem({
  item,
  sidebarOpen,
  pageName,
  setPageName,
}) {
  const [isClient, setIsClient] = useState(false);
  const pathname = usePathname();

  const isActive = (item) => {
    if (item.route === pathname) return true;
    if (item.children) return item.children.some((child) => isActive(child));

    return false;
  };
  const isItemActive = isActive(item);

  const handleClick = () => {
    const updatedPageName =
      pageName !== item.label.toLowerCase() ? item.label.toLowerCase() : "";

    return setPageName(updatedPageName);
  };

  useEffect(() => {
    if (item.route === pathname) {
      setPageName(item.label.toLowerCase());
    }
    setIsClient(true);
  }, []);

  return (
    <li>
      <Link
        onClick={handleClick}
        href={item?.route || ""}
        className={`flex p-2 font-medium text-[#DEE4EE] hover:bg-[#333A48]
        ${isItemActive ? "bg-[#3C50E0] text-white" : ""} 
        ${!sidebarOpen ? "justify-center group-hover:justify-normal" : ""}`}
      >
        {item.icon}
        <p
          className={`ml-2 relative flex items-center justify-between w-full ${
            !sidebarOpen ? "hidden group-hover:block" : ""
          }`}
        >
          {item.label}
          {item.children && (
            <svg
              className={`absolute right-2 top-1/2 -translate-y-1/2 fill-current duration-500 ${
                isClient && pageName === item.label.toLowerCase()
                  ? "rotate-0"
                  : "rotate-90"
              }`}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                fill=""
              />
            </svg>
          )}
        </p>
      </Link>
      {item.children && (
        <SidebarDropdown
          pageName={pageName}
          items={item.children}
          isSelected={isClient && pageName === item.label.toLowerCase()}
        />
      )}
    </li>
  );
}

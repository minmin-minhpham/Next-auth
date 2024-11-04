import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function DefaultLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="relative m-0 p-0">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <main
        className={`w-full translate-x-0 min-h-screen flex flex-col ease-linear duration-300 ${
          sidebarOpen
            ? "md:w-[calc(100%-256px)] md:ml-64"
            : "md:w-[calc(100%-80px)] md:ml-20"
        }`}
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 bg-gray-200 dark:bg-[#1A222C] ">
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}

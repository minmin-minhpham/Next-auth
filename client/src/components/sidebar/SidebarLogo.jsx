export default function SidebarLogo({ sidebarOpen }) {
  return (
    <div className="flex items-center justify-center h-14 border-y-gray-700 border-b-2">
      <div className="rounded-full flex items-center justify-center">
        <span className="text-2xl font-bold">Logo&nbsp;</span>
      </div>
      <span
        className={`${!sidebarOpen && "hidden group-hover:block"} text-sm ml-2`}
      >
        <b>Admin</b>LTE
      </span>
    </div>
  );
}

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center min-h-screen">
      <div className="w-[460px] max-sm:w-[90%]">
        <div className="mb-3 text-center font-light text-[#495057] text-[2.1rem]">
          <Link href="/">
            <b>Admin</b>LTE
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
}

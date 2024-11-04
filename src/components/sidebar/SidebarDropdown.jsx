import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarDropdown({ items, isSelected  }) {
  const pathname = usePathname();

  return (
    <ul
      className={`${
        // pageName ? "max-h-0 opacity-0" : "max-h-40 opacity-100"
        // 'max-h-40 opacity-100'
        isSelected ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      } overflow-hidden transition-all duration-500`}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className="px-8 py-2 group relative flex items-center gap-2.5 rounded-md font-medium text-[#8A99AF] duration-300 ease-in-out hover:text-white"
        >
          <Link href={item.route} className={`${pathname === item.route ? "text-white" : "" }`}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
}

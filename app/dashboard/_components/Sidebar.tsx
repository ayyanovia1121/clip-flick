'use client';
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="h-screen w-64 shadow-md p-5">
      <ul className="grid gap-2">
        {navLinks.map((link) => (
          <Link href={link.path} key={link.id}>
            <li
              className={`flex items-center gap-3 p-3 hover:bg-primary hover:text-white rounded-xl cursor-pointer
                ${pathname === link.path && "bg-primary text-white"}
                `}
            >
              <link.icon />
              <p>{link.name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

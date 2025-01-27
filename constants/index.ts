import { CircleUser, FileVideo, PanelsTopLeft, ShieldPlus } from "lucide-react";

export const navLinks = [
  {
    id: 1,
    name: "Dashboard",
    path: "/dashboard",
    icon: PanelsTopLeft,
  },
  {
    id: 2,
    name: "Create New",
    path: "/dashboard/create-new",
    icon: FileVideo,
  },
  {
    id: 3,
    name: "Upgrade",
    path: "/dashboard/upgrade",
    icon: ShieldPlus,
  },
  {
    id: 4,
    name: "Account",
    path: "/dashboard/account",
    icon: CircleUser,
  },
];
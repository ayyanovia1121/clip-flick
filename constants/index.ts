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

export const topicSelections = [
  {
    value: "Custom Prompt",
    label: "Custom Prompt",
  },
  {
    value: "Random AI Story",
    label: "Random AI Story",
  },
  {
    value: "Scary Story",
    label: "Scary Story",
  },
  {
    value: "Historical Facts",
    label: "Historical Facts",
  },
  {
    value: "Bed Time Story",
    label: "Bed Time Story",
  },
  {
    value: "Motivational",
    label: "Motivational",
  },
  {
    value: "Fun Facts",
    label: "Fun Facts",
  },
];

export const styleSelections = [
  {
    name: "Realistic",
    image: "/realistic.png",
  },
];
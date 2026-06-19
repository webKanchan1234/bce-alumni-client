import {
  FaHome,
  FaUser,
  FaUsers,
  FaCalendar,
  FaBriefcase,
  FaCog,
  FaUserGraduate,
  FaClipboardList,
  FaVideo,
  FaUserFriends,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const menu = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/dashboard",
  },
  {
    name: "My Profile",
    icon: <FaUser />,
    path: "/dashboard/profile",
  },
  {
    name: "Alumni Directory",
    icon: <FaUsers />,
    path: "/dashboard/directory",
  },
  {
    name: "Connections",
    icon: <FaUserFriends />,
    path: "/dashboard/connections",
  },
  {
    name: "Events",
    icon: <FaCalendar />,
    path: "/dashboard/events",
  },
  {
    name: "Jobs",
    icon: <FaBriefcase />,
    path: "/dashboard/jobs",
  },
  {
    name: "Mentorship",
    icon: <FaUserGraduate />,
    path: "/dashboard/mentorship",
  },
  {
    name: "My Requests",
    icon: <FaClipboardList />,
    path: "/dashboard/mentorship/my-requests",
  },
  {
    name: "Sessions",
    icon: <FaVideo />,
    path: "/dashboard/mentorship/sessions",
  },
  {
    name: "Settings",
    icon: <FaCog />,
    path: "/dashboard/settings",
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 bg-slate-900 text-white min-h-screen">
      <div className="p-6 border-b border-slate-700">
        <Link to="/" className="text-2xl font-bold">
          BCE Alumni
        </Link>
      </div>

      <div className="p-4">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="
            flex
            items-center
            gap-4
            p-4
            rounded-xl
            hover:bg-slate-800
            mb-2
            transition
            "
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
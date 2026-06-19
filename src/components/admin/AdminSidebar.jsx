import { Link } from "react-router-dom";

const menus = [
    {
        title: "Dashboard",
        path: "/admin",
    },
    {
        title: "Manage Alumni",
        path: "/admin/alumni",
    },
    {
        title: "Manage Events",
        path: "/admin/events",
    },
    {
        title: "Manage News",
        path: "/admin/news",
    },
    {
        title: "Manage Jobs",
        path: "/admin/jobs",
    },
    {
        title: "Manage Mentors",
        path: "/admin/mentors",
    },
    {
        title: "Manage Leadership",
        path: "/admin/leadership",
    },
    {
        title: "Analytics",
        path: "/admin/analytics",
    },
];

const AdminSidebar = () => {
    return (
        <aside className="w-72 bg-slate-900 text-white min-h-screen">

            <div className="p-6 border-b">
                <Link to="/" className="text-2xl font-bold">
                    Admin Panel
                </Link>
            </div>

            <div className="p-4">

                {menus.map((menu) => (
                    <Link
                        key={menu.title}
                        to={menu.path}
                        className="
            block
            p-4
            rounded-xl
            hover:bg-slate-800
            mb-2
            "
                    >
                        {menu.title}
                    </Link>
                ))}

            </div>

        </aside>
    );
};

export default AdminSidebar;
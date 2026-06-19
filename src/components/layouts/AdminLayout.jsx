import { Outlet } from "react-router-dom";

import AdminSidebar from "../admin/AdminSidebar";
import AdminHeader from "../admin/AdminHeader";

const AdminLayout = () => {
  return (
    <div className="flex">

      <AdminSidebar />

      <div className="flex-1">

        <AdminHeader />

        <main className="p-8 bg-slate-100 min-h-screen">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default AdminLayout;
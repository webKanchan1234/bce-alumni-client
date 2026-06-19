// import Sidebar from "../components/dashboard/Sidebar";
// import Header from "../components/dashboard/Header";
import { Outlet } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import Header from "../dashboard/Header";

const DashboardLayout = () => {
  return (
    <div className="flex">

      <Sidebar />

      <div className="flex-1 bg-slate-100 min-h-screen">

        <Header />

        <main className="p-8">
          <Outlet />
        </main>

      </div>

    </div>
  );
};

export default DashboardLayout;
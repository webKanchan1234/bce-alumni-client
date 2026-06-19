import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";
import AuthLayout from "../components/layouts/AuthLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Alumni from "../pages/Alumni/Alumni";
import Contact from "../pages/Contact/Contact";

import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";

import Dashboard from "../pages/Dashboard/Dashboard";
import Directory from "../pages/Dashboard/Directory";
import AlumniProfile from "../pages/Dashboard/AlumniProfile";

/* Events */
import Events from "../pages/Events/Events";
import EventDetails from "../pages/Events/EventDetails";

/* Jobs */
import Jobs from "../pages/Jobs/Jobs";
import JobDetails from "../pages/Jobs/JobDetails";

/* Mentorship */
import Mentorship from "../pages/Mentorship/Mentorship";
import MentorProfile from "../pages/Mentorship/MentorProfile";

/* Create these pages */
import Profile from "../pages/Dashboard/Profile";
import Settings from "../pages/Dashboard/Settings";
import Connections from "../pages/Dashboard/Connections";
import MyMentorshipRequests from "../pages/Mentorship/MyMentorshipRequests";
import MentorshipSessions from "../pages/Mentorship/MentorshipSessions";
import AdminLayout from "../components/layouts/AdminLayout";


import AdminDashboard from "../pages/Admin/Dashboard";
import ManageAlumni from "../pages/Admin/ManageAlumni";
import ManageEvents from "../pages/Admin/ManageEvents";
import ManageNews from "../pages/Admin/ManageNews";
import ManageJobs from "../pages/Admin/ManageJobs";
import ManageMentors from "../pages/Admin/ManageMentors";
import Analytics from "../pages/Admin/Analytics";
import Gallery from "../pages/Gallery/Gallery";
import News from "../pages/News/News";
import NewsDetails from "../pages/News/NewsDetails";
import SubmitNews from "../pages/News/SubmitNews";
import Membership from "../pages/Membership/Membership";
import AdminRoute from "./AdminRoute";
import ProtectedRoute from "./ProtectedRoute";
import ManageLeadership from "../pages/Admin/ManageLeadership";
import ForgotPassword from "../pages/Auth/ForgotPassword/ForgotPassword";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  /* Public Website */

  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "alumni",
        element: <Alumni />,
      },
      {
        path: "alumni/:id",
        element: <AlumniProfile />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "events/:id",
        element: <EventDetails />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "news/:id",
        element: <NewsDetails />,
      },
      {
        path: "news/submit",
        element: <SubmitNews />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "membership",
        element: <Membership />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "jobs/:id",
        element: <JobDetails />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
  path: "*",
  element: <NotFound />
}
      

    ],
  },

  /* Authentication */

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },

  /* Dashboard */

  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },

      {
        path: "profile",
        element: <Profile />,
      },

      {
        path: "settings",
        element: <Settings />,
      },

      {
        path: "connections",
        element: <Connections />,
      },

      {
        path: "directory",
        element: <Directory />,
      },

      {
        path: "alumni/:id",
        element: <AlumniProfile />,
      },

      /* Events */

      {
        path: "events",
        children: [
          {
            index: true,
            element: <Events />,
          },
          {
            path: ":id",
            element: <EventDetails />,
          },
        ],
      },

      /* Jobs */

      {
        path: "jobs",
        children: [
          {
            index: true,
            element: <Jobs />,
          },
          {
            path: ":id",
            element: <JobDetails />,
          },
        ],
      },

      /* Mentorship */

      {
        path: "mentorship",
        children: [
          {
            index: true,
            element: <Mentorship />,
          },
          {
            path: ":id",
            element: <MentorProfile />,
          },
          {
            path: "my-requests",
            element: <MyMentorshipRequests />,
          },
          {
            path: "sessions",
            element: <MentorshipSessions />,
          },
        ],
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <AdminRoute>
        <AdminLayout />
      </AdminRoute>
    ),
    children: [
      {
        index: true,
        element: <AdminDashboard />,
      },

      {
        path: "alumni",
        element: <ManageAlumni />,
      },

      {
        path: "events",
        element: <ManageEvents />,
      },

      {
        path: "news",
        element: <ManageNews />,
      },

      {
        path: "jobs",
        element: <ManageJobs />,
      },

      {
        path: "mentors",
        element: <ManageMentors />,
      },
      {
        path: "leadership",
        element: <ManageLeadership />,
      },

      {
        path: "analytics",
        element: <Analytics />,
      },
    ],
  },
]);
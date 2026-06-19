import { useEffect, useState } from "react";
import { getCurrentUser } from "../../api/userApi";

const AdminHeader = () => {

  const [user, setUser] =
    useState(null);

  useEffect(() => {

    const loadUser =
      async () => {

        try {

          const response =
            await getCurrentUser();

          setUser(
            response.data
          );

        } catch (error) {

          console.error(error);
        }
      };

    loadUser();

  }, []);

  return (

    <header
      className="
      h-20
      bg-white
      shadow
      flex
      items-center
      justify-between
      px-8
      "
    >

      <h2
        className="
        text-3xl
        font-bold
        text-blue-700
        "
      >
        BCE Admin
      </h2>

      <div
        className="
        flex
        items-center
        gap-3
        "
      >

        <img
          src={
            user?.profileImage ||
            "https://i.pravatar.cc/150"
          }
          alt="Admin"
          className="
          w-12
          h-12
          rounded-full
          object-cover
          border-2
          border-blue-100
          "
        />

        <div>

          <p className="font-semibold">
            {user?.firstName}
            {" "}
            {user?.lastName}
          </p>

          <p
            className="
            text-sm
            text-gray-500
            "
          >
            {user?.role}
          </p>

        </div>

      </div>

    </header>

  );
};

export default AdminHeader;
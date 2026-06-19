import { useEffect, useState } from "react";
import { getCurrentUser } from "../../api/userApi";

const Header = () => {

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
      bg-white
      shadow-sm
      px-8
      py-5
      flex
      justify-between
      items-center
      "
    >

      <h2
        className="
        text-2xl
        font-bold
        "
      >
        Dashboard
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
          alt="Profile"
          className="
          w-10
          h-10
          rounded-full
          object-cover
          border-2
          border-blue-100
          "
        />

        <span
          className="
          font-medium
          "
        >
          {user?.firstName}
          {" "}
          {user?.lastName}
        </span>

      </div>

    </header>

  );
};

export default Header;
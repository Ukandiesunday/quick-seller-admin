import CartLogo from "../../assets/Icons/logo.svg";
import Cartuser from "../../assets/Icons/user.svg";
import ProfileModal from "./ProfileModal";
import React, { useState } from "react";
type siderBarProps = {
  sidebarIcon: React.ReactNode;
};
const Navbar = ({ sidebarIcon }: siderBarProps) => {
  const [isOpenProfile, setOpenProfile] = useState(false);

  const ToggleProfile = () => {
    setOpenProfile((prev) => !prev);
  };

  return (
    <nav className="w-full  bg-white  h-[88px]">
      <div className="bg-white fixed top-0 left-0 right-0 flex items-center justify-between py-2 px-[20px] md:px-[30px] xl:px-[100px] w-full h-[88px] z-10">
        <div className="flex items-center gap-[30px]">
          {sidebarIcon}
          <div className="cursor-pointer">
            <img className="size-[50px]" src={CartLogo} alt="cart logo" />
          </div>
        </div>
        <button
          // onBlur={() => isOpenProfile && setOpenProfile(false)}
          className="flex space-x-3 justify-center items-center cursor-pointer"
          onClick={ToggleProfile}
        >
          <img src={Cartuser} alt="" />
          <div className="flex flex-col  pl-2 relative ">
            <span className="font-[700] text-nowrap">Esther Ubi</span>
            <span>Admin</span>
          </div>
        </button>
        {isOpenProfile && <ProfileModal />}
      </div>
    </nav>
  );
};

export default Navbar;

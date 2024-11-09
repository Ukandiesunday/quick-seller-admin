import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { FiSidebar } from "react-icons/fi";
import { useState } from "react";

import { useModalContext } from "@/context/ModalContext";
import AddAdminForm from "../AddAdminForm";
import MobileSidebar from "../sidebar/MobileSidebar";
// import { ScrollArea, ScrollBar } from "../ui/scroll-area";
const SharedLayout = () => {
  const [isOpenSidebar, setOpenSidebar] = useState(false);

  const { openModal, closeModal } = useModalContext();

  const toggleSidebar = () => {
    setOpenSidebar((prev) => !prev);
  };

  return (
    <div className="w-full relative">
      <div className="">
        <Navbar
          sidebarIcon={
            <FiSidebar
              onClick={toggleSidebar}
              className="text-[24px] cursor-pointer mb-2 size-[30px]  block  xl:hidden"
            />
          }
        />
      </div>
      <div className="flex">
        <div className=" min-h-[936px]  xl:basis-[12%]">
          <Sidebar />
        </div>
        <div className="flex flex-col p-[15px] md:p-[30px] basis-[100%] xl:basis-[88%] justify-between xl:max-w-[1100px] xxl:max-w-full ">
          <Outlet />
        </div>
      </div>
      <MobileSidebar
        toggleSidebar={toggleSidebar}
        isOpenSidebar={isOpenSidebar}
      />

      {openModal === "addAdmin" && (
        <AddAdminForm closeModal={closeModal} openModal={openModal} />
      )}
      {/* <CategoryForm /> */}
    </div>
  );
};

export default SharedLayout;

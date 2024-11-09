import { useState } from "react";
import LogoutIcon from "../DashboardIcons/LogoutIcon";
import CartLogo from "../../assets/Icons/logo.svg";
import { navlinks, SidebarProps } from "./SidebarLinks";
import { Link, NavLink } from "react-router-dom";

const MobileSidebar = ({ isOpenSidebar, toggleSidebar }: any) => {
  const [open, setOpen] = useState<boolean>(false);
  const [subRoute, setSubRoute] = useState([]);

  const toggleAccordion = (item: string) => {
    if (item === "customers") {
      setOpen((prev) => !prev);
    } else {
      toggleSidebar();
    }
  };

  return (
    <div
      onClick={toggleSidebar}
      className={`xl:hidden fixed custom-bg-rgba  z-50 top-0 w-full h-[100vh] transition-all duration-700 ${
        isOpenSidebar ? "left-0" : "left-[-200%]"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" bg-white absolute top-0 left-[0] z-10 h-[100vh]  w-[300px] py-[30px] pb-[20px] pt-[16px] overflow-y-scroll custom-scrollbar "
      >
        <img
          className="size-[50px] ml-[50px]  pb-3  "
          src={CartLogo}
          alt="cart logo"
        />
        <ul className="flex flex-col space-y-3">
          {navlinks.map((item: SidebarProps, index) => (
            <div key={index}>
              <NavLink
                onClick={() => toggleAccordion(item.content)}
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `text-[#333333]  font-semibold max-h-fit py-[8px] pr-[64px]  pl-[24px] flex space-x-3 no-wrap relative ${
                    isActive ? "bg-[#4EBA6F] text-white " : ""
                  }`
                }
              >
                <span className="">{item.icon}</span>
                <span className=" font-bold capitalize size-[18px] text-nowrap">
                  {item.content}
                </span>
                <span className="absolute  right-[30px] top-[13px]">
                  {open ? item.icon2 : item.icon3}
                </span>
              </NavLink>

              {/* Sub-routes Accordion*/}
              <div
                className={`flex bg-white flex-col gap-1 ml-14 ${
                  open ? "block" : "hidden"
                }`}
              >
                {item?.customer?.map((subItem: any) => (
                  <Link
                    onClick={() => {
                      setSubRoute(subItem.content2);

                      toggleSidebar();
                    }}
                    key={subItem.vendors}
                    to={subItem.path}
                    className={`mt-[12px] font-[600] text-[15px] text-gray-600 capitalize ${
                      subItem.content2 === subRoute && "text-green-500"
                    }`}
                  >
                    {subItem.content2}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </ul>

        <hr />
        <div className="flex gap-3 items-center p-[20px]">
          <LogoutIcon />

          <span className="font-bold capitalize size-[18px]">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;

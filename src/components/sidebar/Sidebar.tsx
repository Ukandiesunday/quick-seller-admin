import { useState } from "react";
import LogoutIcon from "../DashboardIcons/LogoutIcon";
import { ScrollArea } from "../ui/scroll-area";
import { navlinks, SidebarProps } from "./SidebarLinks";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [subRoute, setSubRoute] = useState([]);

  const toggleAccordion = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      <ScrollArea
        className={`h-[750px] hidden  xl:block shadow-none border-none  xl:w-[305px]
      
        `}
      >
        <div className=" bg-white fixed top-[88px] left-[0] z-10 h-[980px]  xl:w-[305px] py-[30px] pb-[20px]">
          <ul className="flex flex-col space-y-3">
            {navlinks.map((item: SidebarProps, index) => (
              <div key={index}>
                <NavLink
                  onClick={() =>
                    item.content === "customers" && toggleAccordion()
                  }
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-[#333333] font-semibold max-h-fit py-[8px] pr-[64px]  pl-[24px] flex space-x-3 no-wrap relative ${
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
                      onClick={() => setSubRoute(subItem.content2)}
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

            <span className="hidden md:block font-bold capitalize size-[18px]">
              Logout
            </span>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Sidebar;

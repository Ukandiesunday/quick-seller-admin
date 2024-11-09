import AdsManagerIcon from "../DashboardIcons/AdsManagerIcon";
import CategoryIcon from "../DashboardIcons/CategoryIcon";
import NewsLetterIcon from "../DashboardIcons/NewsLetterIcon";
import OrdersIcon from "../DashboardIcons/OrdersIcon";
import OverviewIcon from "../DashboardIcons/OverviewIcon";
import PaidPromotionIcon from "../DashboardIcons/PaidPromotionIcon";
import PayoutIcon from "../DashboardIcons/PayoutIcon";
import ReferralIcon from "../DashboardIcons/ReferralIcon";
import SettingsIcon from "../DashboardIcons/SettingsIcon";
import UserIcon from "../DashboardIcons/UserIcon";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { ReactNode } from "react";

export interface SidebarProps {
  path: string;
  icon: ReactNode;
  id: string;
  content: string;
  customer?: any;
  icon2?: ReactNode;
  icon3?: ReactNode;
}

export const navlinks: SidebarProps[] = [
  {
    id: "1",
    path: "/",
    content: "overview",
    icon: <OverviewIcon />,
  },
  {
    id: "2",
    path: "/category",
    content: "category",
    icon: <CategoryIcon />,
  },
  {
    id: "3",
    path: "/customers",
    content: "customers",
    icon: <UserIcon />,
    icon2: <IoIosArrowDown />,
    icon3: <IoIosArrowUp />,

    customer: [
      {
        content2: "buyers",
        path: "/customers",
      },
      {
        content2: "vendors",
        path: "/customers/vendors",
      },
      {
        content2: "premium vendors",
        path: "customers/premium vendors",
      },
      {
        content2: "dispatch riders",
        path: "customers/dispatch riders",
      },
    ],
  },
  {
    id: "4",
    path: "orders",
    content: "orders",
    icon: <OrdersIcon />,
  },
  {
    id: "5",
    path: "/ads manager",
    content: "ads manager",
    icon: <AdsManagerIcon />,
  },
  {
    id: "6",
    path: "/payout request",
    content: "payout request",
    icon: <PayoutIcon />,
  },

  {
    id: "7",
    path: "/referral tracker",
    content: "referral tracker",
    icon: <ReferralIcon />,
  },

  {
    id: "8",
    path: "/paid promotion",
    content: "paid promotion",
    icon: <PaidPromotionIcon />,
  },
  {
    id: "9",
    path: "/newsletter",
    content: "newsletter",
    icon: <NewsLetterIcon />,
  },
  {
    id: "10",
    path: "settings",
    content: "settings",
    icon: <SettingsIcon />,
  },
];

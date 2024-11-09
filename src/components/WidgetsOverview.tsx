import ProfitPercentDown from "./DashboardIcons/ProfitPercentDown";
import ProfitPercentUp from "./DashboardIcons/ProfitPercentUp";
import ProfitTotalIcon from "./DashboardIcons/ProfitTotalIcon";
import TotalProfitIconS from "./DashboardIcons/TotalProfitIconS";
import WidgetUserIcon from "./DashboardIcons/WidgetUserIcon";

interface WidgetItem {
  title: string;
  value: string;
  icon: JSX.Element;
  percentageIcon: JSX.Element;
}

const widgetItems: WidgetItem[] = [
  {
    title: "Total Product",
    value: "450",
    icon: <ProfitTotalIcon />,
    percentageIcon: <ProfitPercentUp />,
  },
  {
    title: "No. of Registered Users",
    value: "450",
    percentageIcon: <ProfitPercentUp />,
    icon: <WidgetUserIcon />,
  },
  {
    title: "Total Product",
    value: "$6320",
    icon: <TotalProfitIconS />,
    percentageIcon: <ProfitPercentDown />,
  },
];

const WidgetsOverview = () => {
  return (
    <div className="widget-grid w-full">
      {widgetItems?.map(({ icon, percentageIcon, title, value }, index) => (
        <div
          key={index}
          className="space-y-6 bg-white p-[30px] h-[187px] rounded-[15px]"
        >
          <div className="flex space-x-6 items-center ">
            <div className="">{icon}</div>
            <span className="text-[18px] font-[600]">{title}</span>
          </div>
          <div className="flex justify-between sm:flex-wrap">
            <span className="font-bold text-lg md:text-2xl lg:text-3xl">
              {value}
            </span>
            {percentageIcon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default WidgetsOverview;

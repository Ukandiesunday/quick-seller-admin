import { recentDeliveryProps } from "@/ApiServices/recentDeliveryData";
import ManLocation from "./DashboardIcons/ManLocation";
import Location from "./DashboardIcons/Location";

interface DeliveryTrackerProps {
  data: recentDeliveryProps[];
}

const RecentDelivery = ({ data }: DeliveryTrackerProps) => {
  return (
    <div className="bg-white p-[30px] mt-[30px] custom-rounded">
      <div
        className="flex
      justify-between gap-[20px] font-semibold mb-4"
      >
        <div className=" text-[21px]">Recent Delivery</div>
        <div className="text-green-400 ">See All</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] ">
        {data.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="bg-white border-[1px] border-[#D9DEE2] p-6 custom-rounded "
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-gray-600 font-semibold text-[14px]">
                #{item?.serial_number}
              </h2>
              <span
                className={`flex items-center px-[40px] py-[10px] h-[38px] rounded-[7px] border-[1px]  ${
                  item?.status === "in progress"
                    ? "bg-[#FFF6E8] text-[#FCA617] border-[#FCA617] "
                    : item?.status === "cancelled"
                    ? "bg-[#FEEAEA] text-[#F23131] border-[#F23131] border-[1px]"
                    : item?.status === "complete"
                    ? "bg-[#E4F5E9] text-[#4EBA6F] border-[#4EBA6F]"
                    : "bg-[#FFF6E8] text-[#FCA617] border-[#FCA617]"
                }`}
              >
                {item?.status}
              </span>
            </div>
            <hr className="space-y-3" />
            <div className="mt-3">
              <div className="flex items-start">
                <ManLocation />
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-600 mb-2">From</p>
                  <p className="text-sm text-gray-800">
                    {item?.start_destination}
                  </p>
                </div>
              </div>
              <div className="border-l-2 border-dashed border-gray-300 h-[50px] ml-5"></div>
              <div className="flex items-start">
                <Location />
                <div className="ml-5">
                  <p className="text-sm font-medium text-gray-600 mb-2">To</p>
                  <p className="text-sm text-gray-800">
                    {item?.stop_destination}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex items-center">
                <img className="size-[40px]" src="/customeravatar.svg" alt="" />
                <div className="flex-grow ml-5">
                  <p className="text-sm font-medium text-gray-800">
                    Dispatcher
                  </p>
                  <p className="text-sm text-gray-600">
                    {item?.dispatcher_name}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">
                    Vehicle Type
                  </p>
                  <p className="text-sm text-gray-600">{item?.vehicle_type}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecentDelivery;

import { Link } from "react-router-dom";
import profileAvatar from "../../assets/Images/profileAvatar.svg";

const ProfileModal = () => {
  return (
    <div
      onMouseDown={(e) => e.stopPropagation()}
      className="max-w-fit  h-[252px] bg-white rounded-[15px] absolute top-[90px] right-6"
    >
      <div className="flex space-x-3  p-[20px]">
        <img src={profileAvatar} alt="" />
        <div className="flex flex-col">
          <span className="font-semibold">Esther Ubi</span>
          <span className="text-[14px]">Esthybam123@gmail.com</span>
        </div>
      </div>
      <hr />
      <div className="flex flex-col gap-4 p-[20px] font-[600] text-[16px] ">
        <Link to={"/profileSetting"}>Profile</Link>
        <span>Login</span>
      </div>
    </div>
  );
};

export default ProfileModal;

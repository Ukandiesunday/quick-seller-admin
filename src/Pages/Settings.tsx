import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminUserData, adminUsersColumns } from "@/ApiServices/adminUsersData";
import Button from "@/components/Button";
import DotsIcon from "@/components/DashboardIcons/DotsIcon";
import TextInput from "@/components/TextInput";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { FaPlus } from "react-icons/fa";
import { changePasswordSchema } from "@/schema";
import { useModalContext } from "@/context/ModalContext";

const Settings = () => {
  const { openSpecificModal } = useModalContext();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePasswordSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div className="relative">
      <ScrollArea className="w-full  h-fit whitespace-nowrap custom-rounded border   shadow-none border-none backdrop-blur-[0]">
        <div className="bg-white p-[40px] custom-rounded  overflow-x-scroll md:overflow-x-auto">
          <div className="flex justify-between ">
            <div className="font-semibold text-[18px] mb-1">
              Admin Users
              <span className="text-[14px] font-[400] block">
                Add admins and assign roles
              </span>
            </div>
            <Button
              onClick={() => openSpecificModal && openSpecificModal("addAdmin")}
              className={"h-[56px] px-9 text-white w-[170px] "}
              label="Add Admin"
              icon={<FaPlus className="text-white" />}
            />
          </div>
          <table>
            <thead>
              <tr className="text-left text-[14px] font-[500]">
                {adminUsersColumns.map((col, index) => (
                  <th key={index} className="">
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {adminUserData.map((item, index) => (
                <tr key={index} className="border-b border-[#E6E9EC]">
                  <td>{item.name}</td>
                  <td>{item.role}</td>
                  <td>{item.email}</td>
                  <td>{item.last_login}</td>
                  <td>
                    <DotsIcon />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* ADD ADMIN FORM */}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      {/* CHANGE PASSWORD FORM */}
      <div className="bg-white p-[40px] w-full mt-[30px] custom-rounded relative">
        <form
          className="flex flex-col gap-[30px]"
          action=""
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-left">Change Password</h3>

          <div className="flex gap-[50px] items-center max-w-[700px]">
            <label htmlFor="currentPassword">Current Password</label>

            <TextInput
              register={register("currentPassword")}
              isError={!!errors.currentPassword}
              errorMessage={errors?.currentPassword?.message || ""}
              type={"password"}
              placeholder={"Enter Current Password"}
              id={"currentPassword"}
            />
          </div>
          <div className="flex gap-[66px] max-w-[700px]">
            <label htmlFor="newPassword">New Password</label>

            <TextInput
              register={register("newPassword")}
              isError={!!errors.newPassword}
              errorMessage={errors?.newPassword?.message || ""}
              type={"password"}
              placeholder={"Enter New Password"}
              id={"newPassword"}
            />
          </div>
          <div className="flex gap-[50px] max-w-[700px]">
            <label htmlFor="confirmPassword">Confirm Password</label>

            <TextInput
              register={register("confirmPassword")}
              isError={!!errors.confirmPassword}
              errorMessage={errors?.confirmPassword?.message || ""}
              type={"password"}
              placeholder={"Enter Confirm Password"}
              id={"confirmPassword"}
            />
          </div>

          <div className="mx-auto space-y-2">
            <h4 className="font-bold">Password requirements</h4>
            <p>Ensure that these requirements are met:</p>
            <ul className="list-disc ml-[30px] pt-3">
              <li> Minimum 8 characters long - the more, the better</li>
              <li>At least one lowercase character</li>
              <li>At least one uppercase character</li>
              <li> At least one number, symbol, or whitespace character</li>
            </ul>
          </div>
          <div className="flex  md:justify-end">
            <Button
              className="text-white w-full md:w-[245px] h-[55px]"
              type={"submit"}
              label="Save Changes"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;

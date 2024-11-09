import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import { profileSettingsSchema } from "@/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const ProfileSettings = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(profileSettingsSchema) });

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-[40px] custom-rounded flex flex-col gap-[20px]"
    >
      <h2 className="text-[18px] font-[600] text-[#333333] ">
        Profile setting
      </h2>
      <div>
        <label className="w-fit size-[100px] " htmlFor="file">
          <input hidden type="file" name="" id="file" />
          <img
            className="size-[200px] inline-block"
            src="/profileImg.png"
            alt="profile picture"
          />
        </label>
      </div>
      <div>
        <div className="flex flex-col md:gap-[30px] md:flex-row justify-between">
          <div className=" w-full flex flex-col gap-[10px]">
            <div className="">
              <label className="block mb-1" htmlFor="newPassword">
                New Password
              </label>

              <TextInput
                register={register("firstName")}
                isError={!!errors.firstName}
                errorMessage={errors?.firstName?.message || ""}
                type={"text"}
                placeholder={"Esther Ubi "}
                id={"firstName"}
              />
            </div>
            <div className="">
              <label htmlFor="lastName" className="mb-1">
                Last Name
              </label>

              <TextInput
                register={register("lastName")}
                isError={!!errors.lastName}
                errorMessage={errors?.lastName?.message || ""}
                type={"text"}
                placeholder={"Eni-Ofem"}
                id={"lastName"}
              />
            </div>
          </div>
          <div className=" w-full flex flex-col gap-[10px]">
            <div className="mt-3">
              <label htmlFor="newPassword" className="mb-1">
                New Password
              </label>

              <TextInput
                register={register("phone")}
                isError={!!errors.phone}
                errorMessage={errors?.phone?.message || ""}
                // type={"text"}
                placeholder={"(+234) 7069682025"}
                id={"phone"}
              />
            </div>
            <div className="w-full ">
              <label htmlFor="email">Email Address</label>

              <TextInput
                register={register("email")}
                isError={!!errors.email}
                errorMessage={errors?.email?.message || ""}
                placeholder={"estherubi@gmail.com"}
                id={"email"}
              />
            </div>
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="newPassword" className="mb-1">
            Address
          </label>

          <TextInput
            register={register("address")}
            isError={!!errors.address}
            errorMessage={errors?.address?.message || ""}
            type={"text"}
            placeholder={
              " Badagry-Eko Paliamentary Hotel, Victoria Island, Lagos"
            }
            id={"address"}
          />
        </div>
      </div>

      <div className="flex  md:justify-start">
        <Button
          className="text-white w-full md:w-[245px] h-[55px]"
          type={"submit"}
          label="Save Changes"
        />
      </div>
    </form>
  );
};

export default ProfileSettings;

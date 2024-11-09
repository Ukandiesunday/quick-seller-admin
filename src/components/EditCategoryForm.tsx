import Button from "./Button";
import { IoClose } from "react-icons/io5";

import { FaPlus } from "react-icons/fa";

import { useState } from "react";
import UploadIcon from "./DashboardIcons/UploadIcon";
import { useSearchParams } from "react-router-dom";

interface CategoryType {
  toggleCategoryForm: () => void;
}
const EditCategoryForm = ({ toggleCategoryForm }: CategoryType) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [file, setFile] = useState("");
  const [searchParams] = useSearchParams();
  const id = searchParams.get("categoryId");
  console.log(id);

  const addTag = () => {
    if (inputValue && !tags.includes(inputValue)) {
      setTags([...tags, inputValue]);
    }
    setInputValue("");

    if (tags.length) return;
  };

  const removeTag = (indexToRemove: number) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(file, selectedValue, tags);
  };

  return (
    <div
      onClick={toggleCategoryForm}
      className="w-full h-full custom-bg-rgba md:absolute xl:fixed top-0 left-0 bottom-0 right-0 flex justify-center xl:items-center z-50"
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full top-[88px]  md:max-w-[600px]  absolute md:top-[50px]  custom-rounded p-[30px]  flex flex-col gap-[20px]"
      >
        <div className="flex justify-between">
          <h2 className="text-[21px] font-[600]">New Category</h2>
          <Button
            onClick={toggleCategoryForm}
            icon={<IoClose className="size-6" />}
            className="bg-white border-0"
          />
        </div>
        <div className="bg-white flex flex-col  justify-center  items-center border border-[#E6E9EC] custom-rounded p-[40px] ">
          <label htmlFor="upload">
            <input
              hidden
              value={file}
              onChange={(e) => setFile(e.target.value)}
              type="file"
              name=""
              id="upload"
            />
            <UploadIcon />
          </label>

          <p className="">
            Drag & Drop image or{" "}
            <label htmlFor="upload" className="text-green-400 cursor-pointer">
              Upload image
            </label>{" "}
            here
          </p>
          <p>Maximum image size 5MB</p>
        </div>

        <div className="flex flex-col  justify-center  items-center border border-[#E6E9EC] custom-rounded px-[40px] py-[30px] gap-3">
          <div className="w-full">
            <label htmlFor="">Category</label>
            <div className="w-full  h-[51px] border border-[#E6E9EC] rounded-[10px] bg-transparent px-[15px] py-[15px] mt-1">
              <select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                name=""
                id=""
                className="w-full h-full border-0 outline-none placeholder:text-[#7a7878]"
              >
                <option defaultValue={"Laptop"}>Laptop</option>
                <option value="mac book">Mac Book</option>
                <option value="phone">Phone</option>
              </select>
            </div>
          </div>
          <div className="w-full">
            <label htmlFor="">Product Type</label>

            <div className="flex  justify-between gap-2 w-full  h-fit border border-[#E6E9EC] rounded-[10px] py-[10px] px-[15px]">
              <div className="h-full">
                <div className="flex gap-2 flex-wrap ">
                  {tags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-[#E6E9EC] flex items-center text-[14px] h-[24px] px-2 rounded-[7px] py-2 gap-1"
                    >
                      <button
                        className="font-bold"
                        type="button"
                        onClick={() => removeTag(index)}
                      >
                        x
                      </button>
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>

                <input
                  className="w-full h-full outline-none "
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Laptop"
                />
              </div>

              <Button
                icon={<FaPlus className="size-6 text-[#7a7878]" />}
                className="bg-white"
                onClick={addTag}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button
            label={"Submit"}
            className="text-white text-[600] px-[40px] py-[15px] h-[55px]"
          />
        </div>
      </form>
    </div>
  );
};

export default EditCategoryForm;

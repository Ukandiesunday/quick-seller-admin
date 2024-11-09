import Button from "@/components/Button";
import { category, CategoryProps } from "../ApiServices/categoryStore";
import DeleteIcon from "../components/DashboardIcons/DeleteIcon";
import EditIcon from "../components/DashboardIcons/EditIcon";
import { FaPlus } from "react-icons/fa6";

import { useState } from "react";
import CategoryForm from "@/components/CategoryForm";
import { Link } from "react-router-dom";

const Category = () => {
  const [categoryItems, setCategoryItems] = useState(category);
  const [openForm, setOpenForm] = useState(false);

  const handleCategoryDelete = (id: number) => {
    setCategoryItems(categoryItems?.filter((item) => item.id !== id));
  };

  const toggleCategoryForm = () => {
    setOpenForm((prev) => !prev);
  };
  return (
    <div>
      <div className="bg-white p-[40px] custom-rounded w-full relative">
        <div className="flex justify-between mb-[40px]">
          <div></div>
          <Button
            onClick={toggleCategoryForm}
            icon={<FaPlus className=" w-[22px] h-[22px]" />}
            label="  Category"
            className="gap-[10px] max-w-[163px] h-[56px] px-[32px] py-[16px] text-white font-[600]"
          />
        </div>

        <div className="grid gap-[20px] md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-4">
          {categoryItems.map((item: CategoryProps, index) => (
            <div
              key={index}
              className="flex flex-col bg-white custom-rounded custom-border p-[20px] shadow-sm w-full"
            >
              <div>
                <img src={item.img} alt="thumbnail" className=" w-full" />
              </div>
              <div className="">
                {" "}
                <div className="flex justify-between pt-[13px] ">
                  <h2 className="font-[600] ">{item.title}</h2>
                  <div className="flex gap-[30px] items-center">
                    <Link className="" to={`/category/?categoryId=${item.id}`}>
                      <EditIcon />
                    </Link>

                    <Button
                      icon={<DeleteIcon />}
                      className="bg-transparent px-0"
                      onClick={() => handleCategoryDelete(item.id)}
                    />
                  </div>
                </div>
              </div>
              <ul className="space-y-2 text-[14px] mt-4 font-[400] ">
                {item?.descriptions?.map((value, key) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {openForm && <CategoryForm toggleCategoryForm={toggleCategoryForm} />}
    </div>
  );
};

export default Category;

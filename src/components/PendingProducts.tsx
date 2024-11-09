import { IoClose } from "react-icons/io5";
import Button from "./Button";
import { useState } from "react";

const PendingProducts = ({ togglePending }: any) => {
  const [taps, setTaps] = useState(Array(4).fill(0));

  const handleTapChange = (productIndex: number, tapIndex: number) => {
    setTaps((prevTaps) => {
      const newTaps = [...prevTaps];
      newTaps[productIndex] = tapIndex;
      return newTaps;
    });
  };
  const pendingProductData = [
    {
      id: 1,
      img: ["/mac.png", "/earpod.png", "/mac.png"],

      product_name: "Apple MacBook Pro",
      price: 200000,
      date: "April 14 2024 ",
      product_type: "Laptop",
      desc: "The system features the Apple M.2 Max 12-Core Chip, which provides the power and performance needed to handle your professional workflows.",
    },
    {
      id: 2,
      img: ["/earpod.png", "/mac.png", "/earpod.png"],
      product_name: "VR Device",
      price: 200000,
      date: "April 14 2024 ",
      product_type: "VR",
      desc: "The system features the Apple M.2 Max 12-Core Chip, which provides the power and performance needed to handle your professional workflows.",
    },
    {
      id: 3,
      img: ["/mac.png", "/earpod.png", "/mac.png"],
      product_name: "Apple MacBook Pro",
      price: 200000,
      date: "April 14 2024 ",
      product_type: "Laptop",
      desc: "The system features the Apple M.2 Max 12-Core Chip, which provides the power and performance needed to handle your professional workflows.",
    },
    {
      id: 4,
      img: ["/earpod.png", "/mac.png", "/earpod.png"],
      product_name: "VR Device",
      price: 200000,
      date: "April 14 2024 ",
      product_type: "VR",
      desc: "The system features the Apple M.2 Max 12-Core Chip, which provides the power and performance needed to handle your professional workflows.",
    },
  ];

  return (
    <div
      onClick={togglePending}
      className="  w-full  h-full flex  custom-bg-rgba fixed top-[5px] inset-0  justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full md:max-w-[700px] xl:max-w-[927px] h-full sm:h-[500px] xl:h-[600px] shadow-md absolute top-1 custom-rounded p-[30px] overflow-y-scroll"
      >
        <div className="flex justify-between gap-3 items-center mb-3">
          <h2 className="text-[21px] text-[600]">Product</h2>

          <Button
            onClick={togglePending}
            icon={<IoClose />}
            className="bg-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] ">
          {pendingProductData.map((item, index) => (
            <div
              key={index}
              className="border border-[#E6E9EC] shadow-sm custom-rounded p-[15px]"
            >
              <div className="w-full">
                <img src={item.img[taps[index]]} alt={item.product_name} />
              </div>
              <div className="mt-4  flex items-center gap-2 justify-center ">
                {item.img.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => handleTapChange(index, imgIndex)}
                    className={` size-4 rounded-full  ${
                      taps[index] === imgIndex
                        ? "bg-[#4EBA6F]  text-white w-10 h-2 custom-transition"
                        : "bg-gray-200"
                    } rounded px-2`}
                  ></button>
                ))}
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-[12px]">Product name</p>
                  <p>{item.product_name}</p>
                  <p className="text-[12px] mt-2">Date added</p>
                  <p>{item.date}</p>
                  <p></p>
                </div>
                <div>
                  <p className="text-[12px]">price</p>
                  <p>{item.price}</p>
                  <p className="text-[12px] mt-3">product type</p>
                  <p>{item.product_type}</p>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-[12px]">Description</p>
                <p>{item.desc}</p>
              </div>

              <div className="flex gap-2 mt-2">
                <Button label="Accept" className="h-[38px] text-white" />
                <Button
                  label="Rejects"
                  className="bg-white border border-[#4EBA6F] text-[#4EBA6F] h-[38px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PendingProducts;

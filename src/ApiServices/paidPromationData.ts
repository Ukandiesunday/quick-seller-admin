export type paidPromotionType = {
  id: number;
  vendor_name: string;
  img: string;
  product_name: string;
  duration: string;

  amount: number;
};

const promotionColumnData = [
  {
    header: "S/N",
    accessor: "id",
  },
  {
    header: "Vendor Name",
    accessor: "vendor_name",
    className: "",
  },
  {
    header: "Product Name",
    accessor: "product_name",
    className: "",
  },

  {
    header: "Duration",
    accessor: "duration",
    className: "",
  },
  {
    header: "Amount",
    accessor: "amount",
    className: "",
  },

  {
    header: "Action",
    accessor: "action",
  },
];

const paidPromotionData: paidPromotionType[] = [
  {
    id: 1,
    vendor_name: "doris felix",
    img: "/customeravatar.svg",
    product_name: "NIVEA Radiant & Beauty",
    duration: "2 weeks",

    amount: 400,
  },
  {
    id: 2,
    vendor_name: "joy effiong ",
    img: "/customeravata2.svg",
    product_name: "Men Shoes Sneakers",
    duration: "2 months",

    amount: 1800,
  },
  {
    id: 3,
    vendor_name: "dora okon ",
    img: "/avatarmale.svg",
    product_name: "NIVEA Radiant & Beauty",
    duration: "2 days",

    amount: 1000,
  },
  {
    id: 4,
    vendor_name: "lucy hale ",
    img: "/customeravatar.svg",
    product_name: "XIAOMI Redmi 13C",
    duration: "2 days",

    amount: 700,
  },
  {
    id: 5,
    vendor_name: "ND thomas ",
    img: "/avatarmale.svg",
    product_name: "Men Pants Trousers ",
    duration: "2 weeks",

    amount: 500,
  },
  {
    id: 6,
    vendor_name: "christy silas ",
    img: "/customeravata2.svg",
    product_name: "S20 Wireless Bluetooth",
    duration: "2 days",

    amount: 500,
  },
  {
    id: 7,
    vendor_name: "andor thomas ",
    img: "/customeravatar.svg",
    product_name: "Stud Earrings",
    duration: "3 days",

    amount: 900,
  },
  {
    id: 8,
    vendor_name: "gift okon ",
    img: "/avatarmale.svg",
    product_name: "Samsung Galaxy S20 ",
    duration: "1 month",

    amount: 1400,
  },
  {
    id: 9,
    vendor_name: "emmanuel etim ",
    img: "/customeravata2.svg",
    product_name: "Oraimo Watch 2 GPS ",
    duration: "4 days",

    amount: 2000,
  },
  {
    id: 10,
    vendor_name: "blessed ubi ",
    img: "/customeravatar.svg",
    product_name: "Apple IPhone XR",
    duration: "2 days",

    amount: 200,
  },
  {
    id: 11,
    vendor_name: "justine victor ",
    img: "/customeravata2.svg",
    product_name: "Cotton Athleisure  Hood",
    duration: "2 weeks",

    amount: 600,
  },
  {
    id: 12,
    vendor_name: "julia micheal ",
    img: "/avatarmale.svg",
    product_name: "NIVEA Radiant & Beauty",
    duration: "5 days",

    amount: 1000,
  },
  {
    id: 13,
    vendor_name: "augustine okoro",
    img: "/customeravata2.svg",
    product_name: "NIVEA Radiant & Beauty",
    duration: "2 months",

    amount: 800,
  },
  {
    id: 14,
    vendor_name: "lily collins ",
    img: "/customeravata2.svg",
    product_name: "NIVEA Radiant & Beauty",
    duration: "2 weeks",

    amount: 500,
  },
];

export { paidPromotionData, promotionColumnData };

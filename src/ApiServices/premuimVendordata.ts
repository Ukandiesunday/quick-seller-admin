export type VendorTableType = {
  id: number;
  email: string;
  img: string;
  product_number: number;
  vendor_name: string;

  phone: string;
  vendor_type: string;
};

const premiumVendorColumnData = [
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
    header: "Email Address",
    accessor: "email",
    className: "hidden xl:block",
  },

  {
    header: "Phone No.",
    accessor: "phone",
    className: "",
  },
  {
    header: "Vendor Type",
    accessor: "vendor_type",
    className: "",
  },
  {
    header: "No.Product",
    accessor: "product_number",
    className: "",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const premiumVendorData: VendorTableType[] = [
  {
    id: 1,
    vendor_name: "doris felix",
    img: "/customeravatar.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Reseller",
    product_number: 400,
  },
  {
    id: 2,
    vendor_name: "joy effiong ",
    img: "/customeravata2.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Shop Owner",
    product_number: 300,
  },
  {
    id: 3,
    vendor_name: "dora okon ",
    img: "/avatarmale.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Reseller",
    product_number: 42,
  },
  {
    id: 4,
    vendor_name: "lucy hale ",
    img: "/customeravatar.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Shop Owner",
    product_number: 811,
  },
  {
    id: 5,
    vendor_name: "ND thomas ",
    img: "/avatarmale.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Reseller",
    product_number: 490,
  },
  {
    id: 6,
    vendor_name: "christy silas ",
    img: "/customeravata2.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Shop Owner",
    product_number: 631,
  },
  {
    id: 7,
    vendor_name: "andor thomas ",
    img: "/customeravatar.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Reseller",
    product_number: 222,
  },
  {
    id: 8,
    vendor_name: "gift okon ",
    img: "/avatarmale.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Shop Owner",
    product_number: 75,
  },
  {
    id: 9,
    vendor_name: "emmanuel etim ",
    img: "/customeravata2.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Reseller",
    product_number: 102,
  },
  {
    id: 10,
    vendor_name: "blessed ubi ",
    img: "/customeravatar.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Shop owner",
    product_number: 85,
  },
  {
    id: 11,
    vendor_name: "justine victor ",
    img: "/customeravata2.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Reseller",
    product_number: 330,
  },
  {
    id: 12,
    vendor_name: "julia micheal ",
    img: "/avatarmale.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Shop Owner",
    product_number: 420,
  },
  {
    id: 13,
    vendor_name: "augustine okoro",
    img: "/customeravata2.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Reseller",
    product_number: 180,
  },
  {
    id: 14,
    vendor_name: "lily collins ",
    img: "/customeravata2.svg",
    email: "August1234@gmail.com",
    phone: "07069682025",
    vendor_type: "Vendor as Reseller",
    product_number: 250,
  },
];

export { premiumVendorData, premiumVendorColumnData };

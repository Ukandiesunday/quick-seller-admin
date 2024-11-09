export type OrdersDataType = {
  id: number;
  img: string;
  price: number;
  customer: string;
  date: string;
  product_name: string;
  batch_number: number;
  qty: number;
  status: string;
};

export const ordersColumnData = [
  {
    header: "S/N",
    accessor: "id",
    className: "opacity-0",
  },
  {
    header: "Product Name",
    accessor: "product_name",
    className: "",
  },
  {
    header: "Customer",
    accessor: "customer",
    className: "",
  },
  {
    header: "Price",
    accessor: "price",
    className: "",
  },
  {
    header: "Quantity",
    accessor: "quantity",
    className: "",
  },

  {
    header: "Date",
    accessor: "date",
    className: "",
  },
  {
    header: "Status",
    accessor: "status",
    className: "",
  },
  {
    header: "Action",
    accessor: "action",
    className: "",
  },
];

export const ordersData: OrdersDataType[] = [
  {
    id: 1,

    img: "/productimg/productimg1.svg",
    product_name: "Leather Handbag",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 102,
    date: "April 14 2024 ",
    status: "shipped",
  },
  {
    id: 2,
    img: "/productimg/productimg2.svg",
    product_name: "MacBook Pro ",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 108,
    date: "April 14 2024 ",
    status: "pending",
  },
  {
    id: 3,
    img: "/productimg/productimg3.svg",
    product_name: "Men’s Suit",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 102,
    date: "April 14 2024 ",
    status: "canceled",
  },
  {
    id: 4,
    img: "/productimg/productimg4.svg",
    product_name: "Samsung Galaxy",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 200,
    date: "April 14 2024 ",
    status: "pending",
  },
  {
    id: 5,
    img: "/productimg/productimg5.svg",
    product_name: "Leather Handbag",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 50,
    date: "April 14 2024 ",
    status: "pending",
  },
  {
    id: 6,
    img: "/productimg/productimg7.svg",
    product_name: "Leather Handbag",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 20,
    date: "April 14 2024 ",
    status: "shipped",
  },
  {
    id: 7,
    img: "/productimg/productimg8.svg",
    product_name: "Leather Handbag",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 102,
    date: "April 14 2024 ",
    status: "canceled",
  },

  {
    id: 8,
    img: "/productimg/productimg7.svg",
    product_name: " Leather Handbag",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 20,
    date: "April 14 2024 ",
    status: "shipped",
  },

  {
    id: 9,
    img: "/productimg/productimg5.svg",
    product_name: " Leather Handbag",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 50,
    date: "April 14 2024 ",
    status: "pending",
  },
  {
    id: 10,
    img: "/productimg/productimg7.svg",
    product_name: "Leather Handbag",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 20,
    date: "April 14 2024 ",
    status: "delivered",
  },
  {
    id: 11,
    img: "/productimg/productimg8.svg",
    product_name: "Leather Handbag",
    batch_number: 4433,
    customer: "Emmanuel Etim",
    price: 10000,
    qty: 102,
    date: "April 14 2024 ",
    status: "delivered",
  },
];

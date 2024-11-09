//DISPATCH RIDER CARD DATA

export type VendorType = {
  id: number;

  vehicle_type: string;
  vehicle_number: string;
  name: string;
  phone: string;

  date: string;
  email: string;

  img: string;
};

export const dispatchRiderCardData: VendorType[] = [
  {
    id: 1,

    name: "Jenny Wilson",
    img: "/avatarmale.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 2,

    name: "Jenny Wilson",
    img: "/customeravatar.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 3,

    name: "Jenny Wilson",
    img: "/customeravata2.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 4,

    name: "Jenny Wilson",
    img: "/avatarmale.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 5,

    name: "Jenny Wilson",
    img: "/customeravatar.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 6,

    name: "Jenny Wilson",
    img: "/customeravata2.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 7,

    name: "Jenny Wilson",
    img: "/avatarmale.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 8,

    name: "Jenny Wilson",
    img: "/avatarmale.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 9,

    name: "Jenny Wilson",
    img: "/customeravatar.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 10,

    name: "Jenny Wilson",
    img: "/avatarmale.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 11,

    name: "Jenny Wilson",
    img: "/customeravatar.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
  {
    id: 12,

    name: "Jenny Wilson",
    img: "/customeravata2.svg",
    phone: "(+234) 7069682025",
    vehicle_type: "Cargo Van",
    vehicle_number: "APP-456CV",
    date: "April, 22nd 2024",
    email: "Jenny123@gmail.com",
  },
];

// DISPATCH RIDER TABLE DATA

export interface DispatchersRowProps {
  id: number;
  email: string;
  img: string;
  dispatcher_type: string;
  dispatcher_name: string;
  orders: number;
  phone: string;
}

const dispatchersColumnData = [
  {
    header: "S/N",
    accessor: "id",
  },
  {
    header: "Dispatcher Name",
    accessor: "dispatcher_name",
    className: "",
  },
  {
    header: "Email Address",
    accessor: "email",
    className: "hidden lg:block",
  },

  {
    header: "Phone No.",
    accessor: "phone",
    className: "",
  },
  {
    header: "Dispatcher Type",
    accessor: "dispatcher_type",
    className: "",
  },
  {
    header: "No. Orders",
    accessor: "orders",
    className: "",
  },
  {
    header: "Action",
    accessor: "action",
  },
];

const dispatchersData: DispatchersRowProps[] = [
  {
    id: 1,
    dispatcher_name: "Doris Felix",
    img: "/avatarmale.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 2,
    dispatcher_name: "Joy Effiong ",

    img: "/customeravata2.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 3,
    dispatcher_name: "Dora Okon",
    img: "/avatarmale.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 4,
    dispatcher_name: "Lucy Hale ",
    img: "/customeravatar.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 5,
    dispatcher_name: "ND Thomas ",

    img: "/customeravata2.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 6,
    dispatcher_name: "Christy Silas ",
    img: "/avatarmale.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 7,
    dispatcher_name: "Andor Thomas ",
    img: "/customeravatar.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 8,
    dispatcher_name: "Gift Okon ",

    img: "/customeravata2.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 9,
    dispatcher_name: "Emmanuel Etim",
    img: "/avatarmale.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
  {
    id: 10,
    dispatcher_name: "Blessing Ubi ",
    img: "/customeravatar.svg",
    email: "August1234@gmail.com",

    phone: "07069682025",
    dispatcher_type: "Private Courier",
    orders: 400,
  },
];

export { dispatchersData, dispatchersColumnData };

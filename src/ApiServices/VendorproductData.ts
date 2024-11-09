export type ProductDataType = {
  id: number;
  img: string;
  price: number;
  rating: string;
  date_added: string;
  product_name: string;
};

export const productColumnData = [
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
    header: "Price",
    accessor: "price",
    className: "",
  },
  {
    header: "Rating",
    accessor: "rating",
    className: "",
  },

  {
    header: "Date Added.",
    accessor: "date_added",
    className: "",
  },
];

export const productData: ProductDataType[] = [
  {
    id: 1,
    img: "/productimg/productimg1.svg",
    product_name: "Madewell Leather Handbag",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 2,
    img: "/productimg/productimg2.svg",
    product_name: "Apple MacBook Pro ",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 3,
    img: "/productimg/productimg3.svg",
    product_name: "Men’s Suit",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 4,
    img: "/productimg/productimg4.svg",
    product_name: "Samsung Galaxy",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 5,
    img: "/productimg/productimg5.svg",
    product_name: "Madewell Leather Handbag",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 6,
    img: "/productimg/productimg7.svg",
    product_name: "Madewell Leather Handbag",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 7,
    img: "/productimg/productimg8.svg",
    product_name: "Madewell Leather Handbag",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 8,
    img: "/productimg/productimg4.svg",
    product_name: "Samsung Galaxy",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 9,
    img: "/productimg/productimg4.svg",
    product_name: "Samsung Galaxy",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 10,
    img: "/productimg/productimg4.svg",
    product_name: "Samsung Galaxy",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 11,
    img: "/productimg/productimg7.svg",
    product_name: "Madewell Leather Handbag",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 12,
    img: "/productimg/productimg7.svg",
    product_name: "Madewell Leather Handbag",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 13,
    img: "/productimg/productimg7.svg",
    product_name: "Madewell Leather Handbag",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
  {
    id: 14,
    img: "/productimg/productimg7.svg",
    product_name: "Madewell Leather Handbag",
    price: 10000,
    rating: "4.3",
    date_added: "April 14 2024 ",
  },
];

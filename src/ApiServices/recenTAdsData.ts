export type recentAdsType = {
  id: number;
  img: string;
  header: string;
  description: string;
  ads_type: string;

  date_posted: string;
};

export const recentAdsColumnData = [
  {
    header: "S/N",
    accessor: "id",
    className: "opacity-0",
  },
  {
    header: "Header",
    accessor: "header",
    className: "",
  },
  {
    header: "Ads Type",
    accessor: "ads_type",
    className: "",
  },
  {
    header: "Description",
    accessor: "description",
    className: "",
  },

  {
    header: "Date Posted",
    accessor: "date_posted",
    className: "",
  },
  {
    header: "Action",
    accessor: "action",
    className: "pl-5 md:w-[120px]",
  },
];

export const recentAdsData: recentAdsType[] = [
  {
    id: 1,
    img: "/productimg/productimg1.svg",

    header: "mothers day",
    ads_type: "Special Event / Celebration",
    description: "Description of the intended Ad",

    date_posted: "April 14 2024 ",
  },
  {
    id: 2,
    img: "/productimg/productimg2.svg",

    header: "mothers day",
    ads_type: "Special Promo/ Challenge",
    description: "Description of the intended Ad",

    date_posted: "April 14 2024 ",
  },
  {
    id: 3,
    img: "/productimg/productimg3.svg",

    header: "mothers day",
    ads_type: "Special Event / Celebration",
    description: "Description of the intended Ad",

    date_posted: "April 14 2024 ",
  },
  {
    id: 4,
    img: "/productimg/productimg4.svg",

    header: "mothers day",
    ads_type: "Special Event / Celebration",
    description: "Description of the intended Ad",

    date_posted: "April 14 2024 ",
  },
];

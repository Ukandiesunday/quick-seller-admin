export type referralTrackerType = {
  id: number;
  referral_link: string;
  amount: number;
  customer_name: string;
  customer_type: string;
  referral_id: number;
  visits: number;
};

const referralTrackerColumns = [
  {
    header: "Customer Name",
    accessor: "customer_name",
    className: "",
  },
  {
    header: "Customer Type",
    accessor: "customer_type",
    className: "hidden lg:block",
  },
  {
    header: " Referral Id ",
    accessor: "referral_id",
  },
  {
    header: "Visits",
    accessor: "visits ",
    className: "",
  },
  {
    header: "Amount",
    accessor: "amount",
    className: "",
  },
  {
    header: "Referral Link",
    accessor: "referral_link",
    className: "",
  },
];

const referralTrackerData: referralTrackerType[] = [
  {
    id: 1,
    customer_name: "Roberta Bayeme ",
    customer_type: "vendor",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 2,
    customer_name: "Julia Michael ",
    customer_type: "buyer",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 3,
    customer_name: "Annie Hart",
    customer_type: "vendor",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 4,
    customer_name: "Sandra Bullock ",
    customer_type: "buyer",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 5,
    customer_name: "Lucas Abel ",
    customer_type: "vendor",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 6,
    customer_name: "Christine Thompson ",
    customer_type: "dispatch",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 7,
    customer_name: "Thomas Eloma ",
    customer_type: "vendor",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 8,
    customer_name: "Lucy Hale ",
    customer_type: "vendor",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 9,
    customer_name: "Taylor Roman ",
    customer_type: "vendor",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 10,
    customer_name: "Robert Thomas ",
    customer_type: "buyer",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },

  {
    id: 11,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },
  {
    id: 12,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },
  {
    id: 13,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },
  {
    id: 14,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },
  {
    id: 15,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },
  {
    id: 16,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },
  {
    id: 17,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    referral_id: 24125,
    visits: 32,
    amount: 130,
    referral_link: "https://quickseller.com.",
  },
];

export { referralTrackerData, referralTrackerColumns };

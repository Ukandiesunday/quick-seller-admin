// import { ColumnDef } from "@tanstack/react-table";

export type PayoutRequestType = {
  id: number;
  reference_number: string;
  amount: number;
  customer_name: string;
  customer_type: string;
  payout_to: string;
  date: string;
};

const payoutRequestcolumnData = [
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
    header: " Payout To",
    accessor: "payout_to",
  },
  {
    header: "Amount.",
    accessor: "amount ",
    className: "",
  },
  {
    header: "Date",
    accessor: "date",
    className: "",
  },
  {
    header: "Reference Number",
    accessor: "reference_number",
    className: "",
  },
];

const payoutRequestData: PayoutRequestType[] = [
  {
    id: 1,
    customer_name: "Roberta Bayeme ",
    customer_type: "vendor",
    payout_to: "first bank",
    amount: 90,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 2,
    customer_name: "Julia Michael ",
    customer_type: "buyer",
    payout_to: "Trust Guarantee Bank",
    amount: 70,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 3,
    customer_name: "Annie Hart",
    customer_type: "vendor",
    payout_to: "opay",
    amount: 280,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 4,
    customer_name: "Sandra Bullock ",
    customer_type: "buyer",
    payout_to: "paypal",
    amount: 100,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 5,
    customer_name: "Lucas Abel ",
    customer_type: "vendor",
    payout_to: "monie point",
    amount: 100,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 6,
    customer_name: "Christine Thompson ",
    customer_type: "dispatch",
    payout_to: "first bank",
    amount: 50,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 7,
    customer_name: "Thomas Eloma ",
    customer_type: "vendor",
    payout_to: "access bank",
    amount: 280,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 8,
    customer_name: "Lucy Hale ",
    customer_type: "vendor",
    payout_to: "first bank",
    amount: 380,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 9,
    customer_name: "Taylor Roman ",
    customer_type: "vendor",
    payout_to: "paypal",
    amount: 40,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 10,
    customer_name: "Robert Thomas ",
    customer_type: "buyer",
    payout_to: "opay",
    amount: 70,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },

  {
    id: 11,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
  {
    id: 12,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
  {
    id: 13,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
  {
    id: 14,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
  {
    id: 15,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
  {
    id: 16,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
  {
    id: 17,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
  {
    id: 18,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
  {
    id: 19,
    customer_name: "Abigail Logan",
    customer_type: "dispatch",
    payout_to: "monie point",
    amount: 270,
    date: "March 3rd, 2024",
    reference_number: "781099207196220",
  },
];

export { payoutRequestData, payoutRequestcolumnData };

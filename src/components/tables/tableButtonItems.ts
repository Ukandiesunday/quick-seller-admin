const vendorButtonItems = [
  { id: 1, label: "All", status: "" },
  { id: 2, label: "Top Vendors", status: "" },
  { id: 3, label: "Bad Review", status: "bad_review" },
  { id: 4, label: "Suspended", status: "Suspended" },
];
const productButtons = [
  { id: 1, label: "All", status: "" },
  { id: 2, label: "Top Products", status: "" },
  { id: 3, label: "Bad Review", status: "bad_review" },
];
const ordersButtonsItems = [
  { id: 1, label: "New", status: "" },
  { id: 2, label: "Pending", status: "pending" },
  { id: 3, label: "Delivered", status: "delivered" },
  { id: 4, label: "canceled", status: "canceled" },
];

export { productButtons, vendorButtonItems, ordersButtonsItems };

export type adminUsersType = {
  id: number;
  name: string;
  role: string;
  email: string;
  last_login: string;
};

const adminUsersColumns = [
  {
    header: " Name",
    className: "",
  },
  {
    header: "Role",

    className: "",
  },
  {
    header: " Email Address",
    className: "",
  },
  {
    header: "last login",

    className: "",
  },
];

const adminUserData: adminUsersType[] = [
  {
    id: 1,
    name: "Roberta Bayeme ",
    role: "super admin",
    email: "Roberta@gmail.com",
    last_login: "30 minutes ago",
  },
  {
    id: 2,
    name: "Julia Michael ",
    role: "sub admin",
    email: "Juliam@gmail.com",
    last_login: "781099207196220",
  },
  {
    id: 3,
    name: "Anie Hart",
    role: "sub admin",
    email: "Ahart54@gmail.com",
    last_login: "781099207196220",
  },
  {
    id: 4,
    name: "Sandra Bullock",
    role: "sub admin",
    email: "Sandb24@gmail.com",
    last_login: "781099207196220",
  },
  {
    id: 4,
    name: "Lucas Abel",
    role: "sub admin",
    email: "Lucas123@gmail.com",
    last_login: "781099207196220",
  },
];

export { adminUserData, adminUsersColumns };

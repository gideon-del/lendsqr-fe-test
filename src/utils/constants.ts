/* eslint-disable @typescript-eslint/no-unused-vars */
import UserImg from "@/assets/images/user.png";
import ActiveUserImg from "@/assets/images/active-user.png";
import UserWithLoansImg from "@/assets/images/user-with-loans.png";
import UserWithSavingsImg from "@/assets/images/user-with-savings.png";
export const userReports = [
  {
    title: "user",
    amount: 2453,
    img: UserImg,
  },
  {
    title: "active users",
    amount: 2453,
    img: ActiveUserImg,
  },
  {
    title: "user with loans",
    amount: 12453,
    img: UserWithLoansImg,
  },
  {
    title: "user with savings",
    amount: 102453,
    img: UserWithSavingsImg,
  },
];

export enum FILTER_STATUS {
  OPEN,
  CLOSED,
}
export enum ACTIONS {
  CHANGE,
  RESET,
  APPLY,
  CLOSE,
  OPEN,
}

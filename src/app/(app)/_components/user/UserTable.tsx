import React from "react";
import UserTableHead from "./UserTableHead";
import UserTableItem from "./UserTableItem";
import { FILTER_STATUS } from "@/utils/constants";
import MenuFilter from "../filter-menu";
import { useMenuFilter } from "@/context/filter-menu";
const userTableTitles = [
  "organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];
interface UserTableProps {
  users: Users;
}
const UserTable = ({ users }: UserTableProps) => {
  const { filters } = useMenuFilter();

  return (
    <section className="user__table--container">
      <table className="user__table">
        <thead>
          <tr>
            {userTableTitles.map((title) => (
              <UserTableHead title={title} key={title} />
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserTableItem key={user.twitter} {...user} />
          ))}
        </tbody>
      </table>
      {filters.status == FILTER_STATUS.OPEN && <MenuFilter />}
    </section>
  );
};

export default UserTable;

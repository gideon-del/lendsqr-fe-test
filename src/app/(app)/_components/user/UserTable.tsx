import React from "react";
import UserTableHead from "./UserTableHead";
import UserTableItem from "./UserTableItem";
const userTableTitles = [
  "organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
];
const UserTable = () => {
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
          <UserTableItem />
          <UserTableItem />
        </tbody>
      </table>
    </section>
  );
};

export default UserTable;

"use client";
import React from "react";
import "./style.scss";
import { FILTER_STATUS, userReports } from "@/utils/constants";
import UserCard from "./UserCard";
import UserTable from "./UserTable";
import { useMenuFilter } from "@/context/filter-menu";
import MenuFilter from "../filter-menu";
const UserDetails = () => {
  const { filters } = useMenuFilter();
  return (
    <section className="user__dashboard--container">
      <h1 className="page__title">Users</h1>
      <section className="user__reports--container">
        {userReports.map((userReport) => (
          <UserCard {...userReport} key={userReport.title} />
        ))}
      </section>
      <UserTable />
      {filters.status == FILTER_STATUS.OPEN && <MenuFilter />}
    </section>
  );
};

export default UserDetails;

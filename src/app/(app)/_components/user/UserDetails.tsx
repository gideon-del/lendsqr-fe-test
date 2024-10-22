"use client";
import React from "react";
import "./style.scss";
import { userReports } from "@/utils/constants";
import UserCard from "./UserCard";
import UserTable from "./UserTable";

const UserDetails = () => {
  return (
    <section className="user__dashboard--container">
      <h1 className="page__title">Users</h1>
      <section className="user__reports--container">
        {userReports.map((userReport) => (
          <UserCard {...userReport} key={userReport.title} />
        ))}
      </section>
      <UserTable />
    </section>
  );
};

export default UserDetails;

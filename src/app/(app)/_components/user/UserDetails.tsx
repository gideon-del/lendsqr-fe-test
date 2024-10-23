/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { userReports } from "@/utils/constants";
import UserCard from "./UserCard";
import UserTable from "./UserTable";
import PaginationBar from "./pagination/PaginationBar";
import { usePagination } from "@/hooks/use-pagination";

const UserDetails = () => {
  const [loading, setisLoading] = useState(true);
  const [users, setUsers] = useState<Users>([]);
  const {
    paginatedData,
    activePage,
    leftPages,
    onOffsetChange,
    onPageChange,
    pageOffset,
    rightPages,
    init,
    pages,
  } = usePagination(users);
  const getUsers = async () => {
    try {
      setisLoading(true);
      const res = await fetch(
        `https://api.json-generator.com/templates/kVQOgM6McxqY/data`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_JSON_SECRET}`,
          },
        }
      );
      console.log("loading");
      const users = (await res.json()) as Users;
      setUsers(users);
      console.log("Init");
      init(users);
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="user__dashboard--container">
      {!loading ? (
        <>
          <h1 className="page__title">Users</h1>
          <section className="user__reports--container">
            {userReports.map((userReport) => (
              <UserCard {...userReport} key={userReport.title} />
            ))}
          </section>
          <UserTable users={paginatedData} />
          <PaginationBar
            activePage={activePage}
            curPageOffset={pageOffset}
            leftPages={leftPages}
            onOffsetChange={onOffsetChange}
            onPageChange={onPageChange}
            rightPages={rightPages}
            total={users.length}
            totalPages={pages.length - 1}
          />
        </>
      ) : (
        <div className="loader">
          <div></div>
        </div>
      )}
    </section>
  );
};

export default UserDetails;

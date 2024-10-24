/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import "./style.scss";
import { ACTIONS, userReports } from "@/utils/constants";
import UserCard from "./UserCard";
import UserTable from "./UserTable";
import PaginationBar from "./pagination/PaginationBar";
import { usePagination } from "@/hooks/use-pagination";
import { useMenuFilter } from "@/context/filter-menu";
import { addOrganizations, filterUsers } from "@/utils/helpers";

const UserDetails = () => {
  const [loading, setisLoading] = useState(true);
  const {
    dispatch,
    filters: { main },
  } = useMenuFilter();
  const [users, setUsers] = useState<Users>([]);
  const filteredUser = filterUsers(users, main);
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
  } = usePagination(filteredUser);
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
      const users = (await res.json()) as Users;
      setUsers(users);
      dispatch!({
        type: ACTIONS.ADD_ORGANIZARION,
        payload: { organizations: addOrganizations(users) },
      });
      init(filterUsers(users, main));
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (users) {
      init(filterUsers(users, main));
    }
  }, [main]);

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
            total={filteredUser.length}
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

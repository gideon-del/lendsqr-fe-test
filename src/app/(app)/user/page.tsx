"use client";
import React, { Suspense } from "react";
import UserDetails from "../_components/user/UserDetails";

const UserPage = () => {
  return (
    <Suspense>
      <UserDetails />
    </Suspense>
  );
};

export default UserPage;

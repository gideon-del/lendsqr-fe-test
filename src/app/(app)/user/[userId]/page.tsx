"use client";
import "./style.scss";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import backIcon from "@/assets/images/icons/back.svg";
import defaultAvatar from "@/assets/images/default-avatar.svg";
import starFilled from "@/assets/images/icons/star-filled.svg";
import starEmpty from "@/assets/images/icons/star-empty.svg";
import { useRouter } from "next/navigation";
import UserInfo from "./_components/UserInfo";
import {
  getUserFromLocalStorag,
  transformPersonalInformation,
} from "@/utils/helpers";
import Loader from "../../_components/Loader";
const UserDetailsPage = () => {
  const { back, replace } = useRouter();
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    const user = getUserFromLocalStorag();
    if (!user) {
      replace("/user");
    } else {
      setUser(user);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className="user__detail--container">
      {user ? (
        <>
          <button className="back-btn" onClick={back}>
            <Image src={backIcon} alt="" />
            <span>Back to Users</span>
          </button>
          <div className="user__detail--title-container">
            <h1 className="user__detail--title">User Details</h1>
            <div className="user__detail--actions">
              <button className="user__detail--btn blacklist">
                Blacklist User
              </button>
              <button className="user__detail--btn activate">
                Activate User
              </button>
            </div>
          </div>
          <section className="user__detail--profile-container">
            <div className="user__detail--basic">
              <div className="user__detail--profile">
                <figure>
                  <Image src={defaultAvatar} alt="" />
                </figure>
                <h2>
                  {user.fullName}
                  <span>LSQFf587g90</span>
                </h2>
              </div>
              <div className="seperator"></div>
              <div className="user__detail--tier-container">
                <span>User’s Tier</span>
                <div className="user__detail--tier">
                  <Image src={starFilled} alt="" />
                  <Image src={starEmpty} alt="" />
                  <Image src={starEmpty} alt="" />
                </div>
              </div>
              <div className="seperator"></div>
              <div className="user__detail--balance-container">
                <h2 className="user__detail--balance">₦200,000.00</h2>
                <span>9912345678/Providus Bank</span>
              </div>
            </div>
            <div className="user__detail--links">
              <button className="user__detail--link active">
                General Details
              </button>
              <button className="user__detail--link">Documents</button>
              <button className="user__detail--link">Bank Details</button>
              <button className="user__detail--link">Loans</button>
              <button className="user__detail--link">Savings</button>
              <button className="user__detail--link">App and System</button>
            </div>
          </section>
          <section className="user__detail--info-container">
            <UserInfo
              name="Personal Information"
              subInfo={transformPersonalInformation(user)}
            />
          </section>
        </>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default UserDetailsPage;

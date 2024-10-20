"use client";
import React from "react";
import "./style.scss";
import Image from "next/image";
import logo from "@/assets/images/logo-sm.svg";
import searchIcon from "@/assets/images/icons/search.svg";
import notificationIcon from "@/assets/images/icons/notification.svg";
import avatar from "@/assets/images/avatar.png";
import dropDownImg from "@/assets/images/icons/dropdown.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo__form__container">
        <figure>
          <Image src={logo} alt="Lendsqr" />
        </figure>
        <form onSubmit={(e) => e.preventDefault()} className="search__form">
          <input
            type="text"
            placeholder="Search for anything"
            className="search__input"
          />
          <button type="submit" className="search__btn">
            <Image src={searchIcon} alt="search" />
          </button>
        </form>
      </div>
      <div className="header__links">
        <button className="doc__btn">Doc</button>
        <button>
          <Image src={notificationIcon} alt="notification" />
        </button>
        <div className="header__user--container">
          <figure>
            <Image src={avatar} alt="avatar" />
          </figure>
          <div className="header__action">
            <span className="user__name"> Adedeji</span>
            <button>
              <Image src={dropDownImg} alt="dropdown" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

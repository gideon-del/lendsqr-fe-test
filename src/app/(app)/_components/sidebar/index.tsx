import React from "react";
import "./style.scss";
import homeIcon from "@/assets/images/icons/briefcase.svg";
import dropdownIcon from "@/assets/images/icons/chevron-down.svg";
import Image from "next/image";
import { sidebarLinks } from "@/utils/sidebar-links";
import NestedLink from "./nested-link";
import SingleLink from "./single-link";
const Sidebar = () => {
  return (
    <aside className="sidebar__container">
      <button className="organization__btn">
        <Image src={homeIcon} alt="organization" />
        <span>Switch Organization</span>
        <Image src={dropdownIcon} alt="" />
      </button>
      <nav className="sidbar__links--container">
        {sidebarLinks.map((sidbarLink) =>
          sidbarLink.hasOwnProperty("subLinks") ? (
            <NestedLink
              {...(sidbarLink as NestedLinkRoutes)}
              key={(sidbarLink as NestedLinkRoutes).name}
            />
          ) : (
            <SingleLink
              {...(sidbarLink as SingleLinkRoute)}
              key={(sidbarLink as SingleLinkRoute).title}
            />
          )
        )}
      </nav>
    </aside>
  );
};

export default Sidebar;

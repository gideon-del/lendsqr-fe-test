import React from "react";
import "./style.scss";
import homeIcon from "@/assets/images/icons/briefcase.svg";
import dropdownIcon from "@/assets/images/icons/chevron-down.svg";
import Image from "next/image";
import { sidebarLinks } from "@/utils/sidebar-links";
import NestedLink from "./nested-link";
import SingleLink from "./single-link";
import logo from "@/assets/images/logo-sm.svg";
import closeIcon from "@/assets/images/icons/close.svg";
import logoutIcon from "@/assets/images/icons/logout.svg";
import { logout } from "@/app/actions";
import { useRouter } from "next/navigation";
interface SidebarProps {
  showSidebar: boolean;
  closeSidebar: () => void;
}
const Sidebar = ({ closeSidebar, showSidebar }: SidebarProps) => {
  const { replace } = useRouter();
  const onLogOut = async () => {
    await logout();
    replace("/login");
  };
  return (
    <aside className={`sidebar__container ${showSidebar && "show"}`}>
      <div className="close__menu--container">
        <Image src={logo} alt="lendsqr" />
        <button className="close__menu--btn" onClick={closeSidebar}>
          <Image src={closeIcon} alt="close" />
        </button>
      </div>
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
        <button className="logout-btn" onClick={onLogOut}>
          <Image src={logoutIcon} alt="" />
          <span>Log out</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;

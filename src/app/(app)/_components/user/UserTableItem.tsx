import React, { useState } from "react";
import Image from "next/image";
import viewIcon from "@/assets/images/icons/view.svg";
import deleteIcon from "@/assets/images/icons/delete.svg";
import activateIcon from "@/assets/images/icons/activate-user.svg";
import moreIcon from "@/assets/images/icons/ic-more-vert-18px.svg";
import UserTableAction from "./UserTableAction";
import { addToLocalStorage, formatDate } from "@/utils/helpers";
import { useRouter } from "next/navigation";

const UserTableItem = (prop: UserDetails) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { push } = useRouter();
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const navigateToDetail = () => {
    addToLocalStorage(prop);
    push(`/user/${prop.id}`);
  };
  return (
    <tr className="user__table--item">
      <td>
        <div>{prop.organization}</div>
      </td>
      <td>
        <div>{prop.firstName}</div>
      </td>
      <td>
        <div>{prop.emailAddress}</div>
      </td>
      <td>
        <div>{prop.personalInformation.phoneNumber}</div>
      </td>
      <td>
        <div>{formatDate(prop.dateJoined)}</div>
      </td>
      <td>
        <div className={`user__status ${prop.status}`}>{prop.status}</div>
      </td>
      <td className="more__menu--container">
        <button className="more__icon--btn" onClick={toggleMenu}>
          <Image src={moreIcon} alt="" />
        </button>

        {isMenuOpen && (
          <div className="more__menu" tabIndex={0}>
            <UserTableAction
              image={viewIcon}
              title="View Details"
              onClick={navigateToDetail}
            />
            <UserTableAction image={deleteIcon} title="Blacklist User" />
            <UserTableAction image={activateIcon} title="Activate User" />
          </div>
        )}
      </td>
    </tr>
  );
};

export default UserTableItem;

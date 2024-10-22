import React, { useState } from "react";
import Image from "next/image";
import viewIcon from "@/assets/images/icons/view.svg";
import deleteIcon from "@/assets/images/icons/delete.svg";
import activateIcon from "@/assets/images/icons/activate-user.svg";
import moreIcon from "@/assets/images/icons/ic-more-vert-18px.svg";
import UserTableAction from "./UserTableAction";

const UserTableItem = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <tr className="user__table--item">
      <td>
        <div>Lendsqr</div>
      </td>
      <td>
        <div>Adedeji</div>
      </td>
      <td>
        <div>adedeji@lendsqr.com</div>
      </td>
      <td>
        <div>08078903721</div>
      </td>
      <td>
        <div>May 15, 2020 10:00 AM</div>
      </td>
      <td>
        <div className="user__status">Inactive</div>
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
              onClick={() => {}}
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

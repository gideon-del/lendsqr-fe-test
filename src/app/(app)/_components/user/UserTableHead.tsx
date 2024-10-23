import Image from "next/image";
import React from "react";
import filterImg from "@/assets/images/filter-results-button.svg";
import { useMenuFilter } from "@/context/filter-menu";
import { ACTIONS, FILTER_STATUS } from "@/utils/constants";
const UserTableHead = ({ title }: { title: string }) => {
  const { filters, dispatch } = useMenuFilter();
  const onClick = () => {
    if (!dispatch) return;

    if (filters.status === FILTER_STATUS.CLOSED) {
      dispatch({
        type: ACTIONS.OPEN,
      });
    } else {
      dispatch({ type: ACTIONS.CLOSE });
    }
  };
  return (
    <th>
      <button className="user__table--head-btn" onClick={onClick}>
        <span>{title}</span>
        <Image src={filterImg} alt="" />
      </button>
    </th>
  );
};

export default UserTableHead;

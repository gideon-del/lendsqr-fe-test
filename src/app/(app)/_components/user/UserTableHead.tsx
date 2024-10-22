import Image from "next/image";
import React, { useRef } from "react";
import filterImg from "@/assets/images/filter-results-button.svg";
import { useMenuFilter } from "@/context/filter-menu";
import { ACTIONS, FILTER_STATUS } from "@/utils/constants";
const UserTableHead = ({ title }: { title: string }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { filters, dispatch } = useMenuFilter();
  const onClick = () => {
    if (!buttonRef.current || !dispatch) return;
    const { x, y, height } = buttonRef.current.getBoundingClientRect();
    if (filters.status === FILTER_STATUS.CLOSED) {
      dispatch({
        type: ACTIONS.OPEN,
        payload: {
          point: {
            x: Math.min(x, document.documentElement.clientWidth - 400),
            y: y + height + 14,
          },
        },
      });
    } else {
      dispatch({ type: ACTIONS.CLOSE });
    }
  };
  return (
    <th>
      <button
        ref={buttonRef}
        className="user__table--head-btn"
        onClick={onClick}
      >
        <span>{title}</span>
        <Image src={filterImg} alt="" />
      </button>
    </th>
  );
};

export default UserTableHead;

import React from "react";
import "./style.scss";
import { useMenuFilter } from "@/context/filter-menu";
const MenuFilter = () => {
  const { filters } = useMenuFilter();
  return (
    <div
      className="filter__menu--container"
      style={{
        top: filters.point.y,
        left: filters.point.x,
      }}
    >
      filter
    </div>
  );
};

export default MenuFilter;

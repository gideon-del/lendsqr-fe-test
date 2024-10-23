import React from "react";
import "./style.scss";
import { STATUS } from "@/utils/constants";
import { useMenuFilter } from "@/context/filter-menu";
const MenuFilter = () => {
  const {
    filters: { organization },
  } = useMenuFilter();
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const filters = Object.fromEntries(formData.entries());
    console.log(filters);
  };
  return (
    <form className="filter__menu--container" onSubmit={onSubmit}>
      <fieldset className="filter__menu--group">
        <label htmlFor="organization" className="filter__menu--label">
          Organization
        </label>
        <select
          name="organization"
          className="filter__menu--input"
          id="organization"
        >
          <option selected hidden value="" className="filter__menu--option">
            Select
          </option>
          {organization.map((organization) => (
            <option
              value={organization}
              className="filter__menu--option"
              key={organization}
            >
              {organization}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className="filter__menu--group">
        <label htmlFor="username" className="filter__menu--label">
          Username
        </label>
        <input
          name="username"
          className="filter__menu--input"
          id="username"
          placeholder="User"
        />
      </fieldset>
      <fieldset className="filter__menu--group">
        <label htmlFor="email" className="filter__menu--label">
          Email
        </label>
        <input
          name="email"
          className="filter__menu--input"
          id="email"
          placeholder="Email"
          type="email"
        />
      </fieldset>
      <fieldset className="filter__menu--group">
        <label htmlFor="date" className="filter__menu--label">
          Date
        </label>
        <input
          name="date"
          className="filter__menu--input"
          id="date"
          placeholder="Date"
          type="date"
        />
      </fieldset>
      <fieldset className="filter__menu--group">
        <label htmlFor="phone_number" className="filter__menu--label">
          Phone Number
        </label>
        <input
          name="phone_number"
          className="filter__menu--input"
          id="phone_number"
          placeholder="Phone Number"
          type="number"
        />
      </fieldset>
      <fieldset className="filter__menu--group">
        <label htmlFor="status" className="filter__menu--label">
          Status
        </label>
        <select name="status" className="filter__menu--input" id="status">
          {STATUS.map((status) => (
            <option
              value={status}
              className="filter__menu--option"
              key={status}
            >
              {status}
            </option>
          ))}
        </select>
      </fieldset>
      <div className="filter__menu--btn-container">
        <button className="filter__menu--btn reset" type="button">
          Reset
        </button>
        <button className="filter__menu--btn filter" type="submit">
          Filter
        </button>
      </div>
    </form>
  );
};

export default MenuFilter;

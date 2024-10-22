import React from "react";
import "./style.scss";
const MenuFilter = () => {
  return (
    <form className="filter__menu--container">
      <fieldset className="filter__menu--group">
        <label htmlFor="organization" className="filter__menu--label">
          Organization
        </label>
        <select
          name="organization"
          className="filter__menu--input"
          id="organization"
        >
          <option
            selected
            hidden
            disabled
            value=""
            className="filter__menu--option"
          >
            Select
          </option>
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
          <option
            selected
            hidden
            disabled
            value=""
            className="filter__menu--option"
          >
            Select
          </option>
        </select>
      </fieldset>
    </form>
  );
};

export default MenuFilter;

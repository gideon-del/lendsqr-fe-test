import React from "react";
import SingleLink from "./single-link";

const NestedLink = ({ name, subLinks }: NestedLinkRoutes) => {
  return (
    <div>
      <h2 className="nested__link--title">{name}</h2>
      <ul className="nested__links">
        {subLinks.map((link) => (
          <li key={link.title}>
            <SingleLink {...link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NestedLink;

import Image, { StaticImageData } from "next/image";
import React from "react";
interface UserTableActionPorps {
  image: StaticImageData;
  title: string;
  onClick?: () => void;
}
const UserTableAction = ({ image, title, onClick }: UserTableActionPorps) => {
  return (
    <button className="more__menu--action" onClick={onClick}>
      <figure>
        <Image src={image} alt="" />
      </figure>
      <span>{title}</span>
    </button>
  );
};

export default UserTableAction;

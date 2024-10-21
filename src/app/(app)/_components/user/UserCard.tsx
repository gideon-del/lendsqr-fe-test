import Image, { StaticImageData } from "next/image";
import React from "react";
interface UserCardProps {
  img: StaticImageData;
  title: string;
  amount: number;
}
const formatNum = (num: number) => {
  const formater = new Intl.NumberFormat("en-us");
  return formater.format(num);
};
const UserCard = ({ amount, img, title }: UserCardProps) => {
  return (
    <article className="user__card--container">
      <figure>
        <Image src={img} alt={title} />
      </figure>
      <h2 className="user__card--title">{title}</h2>
      <span className="user__card--result">{formatNum(amount)}</span>
    </article>
  );
};

export default UserCard;

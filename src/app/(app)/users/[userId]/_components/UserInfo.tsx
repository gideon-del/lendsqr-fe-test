import { TransformedInfo } from "@/utils/helpers";
import React from "react";
interface UserInfoProps {
  name: string;
  subInfo: TransformedInfo[];
}
const UserInfo = ({ name, subInfo }: UserInfoProps) => {
  return (
    <article className="user__detail--info-main">
      <h2 className="user__detail--info-title">{name}</h2>
      <div className="user__detail--info-contents">
        {subInfo.map((info) => (
          <div className="user__detail--info-content" key={info.title}>
            <h3>{info.title}</h3>
            <span>{info.value}</span>
          </div>
        ))}
      </div>
    </article>
  );
};

export default UserInfo;

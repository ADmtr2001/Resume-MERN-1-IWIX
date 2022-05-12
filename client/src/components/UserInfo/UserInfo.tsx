import React, { FC } from "react";

import { formatDate } from "../../utils";

import { Wrapper } from "./UserInfo.styles";
import userPreview from "../../assets/user.png";

import { IUser } from "../../types";

interface UserInfoProps {
  user: IUser;
  short?: boolean;
}

const UserInfo: FC<UserInfoProps> = ({ user, short = false }) => {
  return (
    <Wrapper short={short}>
      {short ? (
        <p>User</p>
      ) : (
        <div className="user-image">
          <img src={userPreview} alt="user" />
        </div>
      )}
      <div className="user-info">
        <h3 className="user-name">
          {user.name.length < 20 ? user.name : user.name.slice(0, 19) + "..."}
        </h3>
        <p className="user-email">
          {user.email.length < 30
            ? user.email
            : user.email.slice(0, 30) + "..."}
        </p>
        {!short && (
          <p className="user-register-date">
            on WIX since {formatDate(user.createdAt)}
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default UserInfo;

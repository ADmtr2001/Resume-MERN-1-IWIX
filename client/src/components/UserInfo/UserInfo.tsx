import React, { FC } from "react";
import { IUser } from "../../types";
import { Wrapper } from "./UserInfo.styles";
import userPreview from "../../assets/user.png";
import { formatDate } from "../../utils";

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
        <div className='image'>
          <img src={userPreview} alt='user' />
        </div>
      )}
      <div className='info'>
        <h3 className='name'>
          {user.name.length < 20 ? user.name : user.name.slice(0, 19) + "..."}
        </h3>
        <p className='email'>
          {user.email.length < 20
            ? user.email
            : user.email.slice(0, 21) + "..."}
        </p>
        {!short && (
          <p className='register-date'>
            on WIX since {formatDate(user.createdAt)}
          </p>
        )}
      </div>
    </Wrapper>
  );
};

export default UserInfo;

"use client";

import { User } from "@prisma/client";

interface UserBoxProps {
  data: User;
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
  return (
    <div>
      <h1>User Box</h1>
      {data.email}
    </div>
  );
};

export default UserBox;

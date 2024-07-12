"use client";

import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user?: User;
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
  return (
    <div className="relative">
      <div className="relative inline-block overflow-hidden h-9 w-9">
        <Image
          src={user?.image || "/avatar.png"}
          alt="Avatar"
          fill
          className="rounded-full"
        />
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2.5 w-2.5" />
      </div>
    </div>
  );
};

export default Avatar;

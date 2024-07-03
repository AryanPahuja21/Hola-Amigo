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
        <Image src={user?.image || "/avatar.jpg"} alt="Avatar" fill />
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-1 w-1 md:h-3 md:w-3" />
      </div>
    </div>
  );
};

export default Avatar;

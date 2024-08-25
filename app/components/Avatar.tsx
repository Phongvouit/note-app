import { User } from "@prisma/client";
import Image from "next/image";

interface AvatarProps {
  user: User
}

const Avatar: React.FC<AvatarProps> = ({user}) => {
  return (
    <div
      className="
        relative
        inline-block
        rounded-full
        overflow-hidden
        h-9
        w-9
        "
    >
      <Image alt="Avatar" src={user?.image || "/images/profile.png"} fill/>
    </div>
  );
};
export default Avatar;

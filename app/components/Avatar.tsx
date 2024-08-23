import Image from "next/image";

const Avatar = () => {
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
      <Image alt="Avatar" src="/images/profile.png" fill/>
    </div>
  );
};
export default Avatar;

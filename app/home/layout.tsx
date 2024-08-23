import Image from "next/image";
import UserMenu from "../components/UserMenu";
import FolderList from "../components/FolderList";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <div className="w-full py-8 text-center">
        <Image
          alt="logo"
          height="200"
          width="200"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
      </div>

      <div className="container mx-auto px-8">
        <UserMenu />
        <div className="w-full flex shadow-md rounded-md py-4">
          <div className="w-3/12">
            <FolderList />
          </div>
          <div className="w-9/12">{children}</div>
        </div>
      </div>
    </div>
  );
}

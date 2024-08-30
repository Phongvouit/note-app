import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";

interface IParams {
  folderId?: string;
}

export async function DELETE( request: Request, { params }: { params: IParams }) {
  

  const currentUser = await getCurrentUser();

  if (!currentUser?.id || !currentUser?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const { folderId } = params;
    const existingFolder = await prisma.folder.findUnique({
      where: {
        id: folderId,
      },
    });

    if (!existingFolder) {
      return new NextResponse("Invalid ID", { status: 400 });
    }

    const deletedFolder = await prisma.folder.delete({
      where: {
        id: folderId,
      },
    });
    return NextResponse.json(deletedFolder);
  } catch (error: any) {
    console.log(error, "ERROR_FOLDER_DELETE");
    return new NextResponse("Internal Error", { status: 500 });
  }
}

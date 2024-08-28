import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import useFolder from "@/app/hooks/useFolder";

export async function POST(request: Request) {
  const body = await request.json();
  const {folderId} = body;

  const currentUser = await getCurrentUser();

  if (!currentUser?.id || !currentUser?.email) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  try {
    const newNote = await prisma.note.create({
      data: {
        content: "",
        folder: {
          connect: {
            id: folderId,
          },
        },
      },
      include: {
        folder: true,
      },
    });
    return NextResponse.json(newNote);
  } catch (error: any) {
    console.log(error, "NOTE_ERROR");
    return new NextResponse("Interval Error", { status: 500 });
  }
}

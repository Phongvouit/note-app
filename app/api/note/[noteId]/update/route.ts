import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

interface IParams {
  noteId?: string;
}

export async function PUT(request: Request, { params }: { params: IParams }) {
  const { noteId } = params;
  const body = await request.json();
  const { content } = body;
  try {
    const updateNote = await prisma.note.update({
      where: {
        id: noteId,
      },
      data: {
        content: content,
      },
      include: {
        folder: true,
      }
    });
    return NextResponse.json(updateNote)
  } catch (error: any) {
    console.log(error, "NOTE_ERROR");
    return new NextResponse("Interval Error", { status: 500 });
  }
}


import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb"

interface IParams {
    noteId?: string;
}

export async function DELETE(request: Request, {params}: {params: IParams}) {
    const { noteId } = params;
    try {
        const existingNote = await prisma.note.findUnique({
            where: {
              id: noteId,
            },
          });
      
          if (!existingNote) {
            return new NextResponse("Invalid ID", { status: 400 });
          }
      
          const deletedNote = await prisma.note.delete({
            where: {
              id: noteId,
            },
            include: {
                folder: true,
            }
          });
          return NextResponse.json(deletedNote);
    } catch (error: any) {
        console.log(error, "ERROR_NOTE_DELETE")
        return new NextResponse("Internal Error", { status: 500 });
    }
}
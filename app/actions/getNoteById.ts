import prisma from "@/app/libs/prismadb";

const getNoteById = async (noteId: string) => {
  try {
    const note = await prisma.note.findUnique({
      where: {
        id: noteId,
      },
    });
    return note;
  } catch (error: any) {
    return null;
  }
};
export default getNoteById;

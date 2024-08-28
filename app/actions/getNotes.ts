import prisma from "@/app/libs/prismadb";

const getNotes = async (folderId: string) => {
  try {
    const notes = await prisma.note.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        folderId: folderId,
      },
    });
    return notes;
  } catch (error: any) {
    return [];
  }
};
export default getNotes;

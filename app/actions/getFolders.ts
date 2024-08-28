import prisma from "@/app/libs/prismadb"
import getCurrentUser from "./getCurrentUser";

const getFolders = async () => {
    
    const currentUser = await getCurrentUser();

    if(!currentUser?.id) {
        return []
    }

    try {
        const folders = await prisma.folder.findMany({
            orderBy: {
                createdAt : "desc"
            }
            ,where: {
                authorId: currentUser?.id
            }
        })
        return folders
    } catch (error: any) {
        return []
    }
    
};
export default getFolders;

import { NextResponse } from "next/server"
import prisma from "@/app/libs/prismadb"
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    const body = await request.json();
    const {name} = body;
    const currentUser = await getCurrentUser();

    if(!currentUser?.id || !currentUser?.email) {
        return new NextResponse("Unauthorized", {status: 401})
    }

    try {
        const newFolder = await prisma.folder.create({
            data: {
                name: name,
                author: {
                    connect: {
                        id: currentUser?.id,
                    }
                }
            },
            include: {
                author: true
            }
        })
        return NextResponse.json(newFolder)
    } catch (error: any) {
        console.log(error, "FOLDER_ERROR")
        return new NextResponse("Internal Error", {status: 500})
    }
}
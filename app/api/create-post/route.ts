import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
    const body = await request.json();
    const { title, date } = body;

    // Save the post to the database...
    const post = await prisma.book.create({
        data: {
            title,
            date,
        },
    });

    return NextResponse.json(post, { status: 201 })
}
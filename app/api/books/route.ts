import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    // Get all books from the database...
    const books = await prisma.book.findMany();

    return NextResponse.json(books, { status: 200 });
}
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { NextResponse ,NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(request:NextRequest ) {
  const body = await request.json();
  const { name, email, password } = body;
  console.log(body);

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Missing name, email, or password" },
      { status: 400 }
    );
  }
  const exist = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (exist) {
    return new NextResponse("User already exists", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
  return NextResponse.json(user)
}

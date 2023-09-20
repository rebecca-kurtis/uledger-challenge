import { NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import User from "../../../../../models/user";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newFirstName: first_name,
    newLastName: last_name,
    newTitle: title,
    newDepartment: department,
    newGroup: group,
  } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, {
    first_name,
    last_name,
    title,
    department,
    group,
  });
  return NextResponse.json({ message: "User Updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { stauts: 200 });
}

import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
export async function AddUser(name) {
  try {
    const isAdd = await sql`SELECT * FROM Users WHERE Name = ${name};`;
    console.log("isdddddd", isAdd);
    if (isAdd.rowCount == 0) {
      await sql`INSERT INTO Users(Name, User_id) VALUES (${name}, ${nanoid()});`;
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const list = await sql`SELECT * FROM Users;`;
  return NextResponse.json({ list }, { status: 200 });
}
// export async function GetCurrentUserId() {
//   try {
//     const res = await sql`SELECT * FROM login_user_list WHERE Name = ${name};`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const list = await sql`SELECT * FROM Users;`;
//   return NextResponse.json({ list }, { status: 200 });
// }
// export async function SetCurrentUserId(name) {
//   try {
//     await sql`INSERT INTO login_user_list(Name) VALUES (${name});`;
//     // await sql`INSERT INTO login_user_list(Name) VALUES (${name});`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const list = await sql`SELECT * FROM Users;`;
//   return NextResponse.json({ list }, { status: 200 });
// }

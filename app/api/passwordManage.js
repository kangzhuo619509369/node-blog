"use server";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { nanoid } from "nanoid";
export async function AddPassword(res) {
  try {
    const { id, webSite, webSiteAlias, account, password, link, tag } = res;
    await sql`INSERT INTO Managepassword (id, webSite, webSiteAlias, account, password, link, tag,uuid) VALUES (${id}, ${webSite}, ${webSiteAlias}, ${account}, ${password}, ${link}, ${tag},${nanoid()});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  // const { id, webSite, webSiteAlias, account, password, link, tag } = res;
  // await sql`INSERT INTO Managepassword (id, webSite, webSiteAlias, account, password, link, tag) VALUES (${id}, ${webSite}, ${webSiteAlias}, ${account}, ${password}, ${link}, ${tag});`;
  return NextResponse.json({ status: 200 });
}
export async function GetList(res) {
  try {
    const { webSite, webSiteAlias, account, password, link, tag } = res;
    // await sql`INSERT INTO Managepassword (id, webSite, webSiteAlias, account, password, link, tag) VALUES (${id}, ${webSite}, ${webSiteAlias}, ${account}, ${password}, ${link}, ${tag});`;
    const res = await sql`SELECT * FROM Managepassword;`;
    console.log("oooo", res);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  return NextResponse.json({ res }, { status: 200 });
}
// export async function Adduser(res) {
//     await sql`INSERT INTO Users(Name, User_id) VALUES (${name}, ${nanoid()});`;
// }

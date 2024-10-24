/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";

import { cookies } from "next/headers";

export async function login() {
  cookies().set("isLoggedin", JSON.stringify(true), {
    maxAge: 3600,
  });
}

export async function logout() {
  cookies().delete("isLoggedin");
}

"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sessionOptions, defaultSession } from "./session";

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  // session.isBlocked = isBlocked;

  return session;
};

export const login = async (prevState, formData) => {
  const session = await getSession();

  // console.log(JSON.stringify({ formEmail, formPassword }));
  const email = formData.get("email");
  const password = formData.get("password");

  // Call API
  const baseUrl = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const res = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    return { status: "error", message: data.message };
  }

  session.userName = data.data.user.name;
  session.email = data.user.email;
  session.token = data.token;
  session.isLoggedIn = true;

  await session.save();

  redirect("/admin/profile");
};

export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect("/");
};

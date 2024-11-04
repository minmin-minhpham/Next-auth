"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sessionOptions, defaultSession } from "./session";

export const login = async (prevState, formData) => {
  const session = await getSession();

  // console.log(formData);
  const formEmail = formData.get("email");
  const formPassword = formData.get("password");

  // CHECK USER IN THE DB
  if (formEmail !== db.email && formPassword !== db.password) {
    return { status: "error", message: "Wrong Credentials !!!" };
  }

  session.userId = 1;
  session.email = formEmail;
  session.isAdmin = db.isAdmin;
  session.isLoggedIn = true;

  await session.save();

  redirect("/admin/profile");
};

export const logout = async () => {
  const session = await getSession();

  session.destroy();
  redirect("/");
};

export const getSession = async () => {
  const session = await getIronSession(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  // session.isBlocked = isBlocked;

  return session;
};

const db = {
  email: "min_min@dev.com",
  password: "12345678",
  isAdmin: true,
};

"use client";
import DefaultLayout from "@/components/layout/DefaultLayout";
import { ThemeContextProvider, ThemeProvider } from "@/context/ThemeContext";

export default function Layout({ children }) {
  
  return (
    <ThemeContextProvider>
      <DefaultLayout>{children}</DefaultLayout>
    </ThemeContextProvider>
  );
}

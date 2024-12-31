import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
import { Sidebar } from "@/components/Sidebar";
import { ToggleDarkMode } from "@/components/ToggleDarkMode";


const roboto = Roboto({
  subsets: ['latin'], // Specify subsets (e.g., 'latin', 'cyrillic')
  weight: ['400', '700'], // Specify font weights
});

export const metadata: Metadata = {
  title: "Reinaldo Bustamante",
  description: "Portafolio personal de reinaldo bustamante",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} dark:bg-[#303841] dark:text-white p-4`}
      >
        <ThemeProvider>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <Sidebar />
              <ToggleDarkMode />
            </div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

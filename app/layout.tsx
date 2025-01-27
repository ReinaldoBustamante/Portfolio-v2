import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
import { Header } from "@/components/Header";


const roboto = Roboto({
  subsets: ['latin'], // Specify subsets (e.g., 'latin', 'cyrillic')
  weight: ['400', '700'], // Specify font weights
});

export const metadata: Metadata = {
  title: "Reinaldo Bustamante",
  description: "Soy Reinaldo Bustamante, Ingeniero Civil Informático especializado en desarrollo web full stack. Descubre mis proyectos, habilidades y experiencia.",
  keywords: "Reinaldo Bustamante, Ingeniero Civil Informático, desarrollo web, full stack, frontend, backend, desarrollador web, Valdivia, Chile, portafolio profesional, React, Node.js, Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} dark:bg-[#303841] dark:text-white`}
      >
        <ThemeProvider>
          <div className="h-svh overflow-y-auto p-4 md:flex md:justify-center ">
            <div className="md:w-[1024px] flex flex-col gap-8 ">
              <Header />
              {children}
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

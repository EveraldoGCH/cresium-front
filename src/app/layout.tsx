import type { Metadata } from "next";
import "./globals.css";
import { VerticalMenu } from "@/components/layout/VerticalMenu/VerticalMenu";

export const metadata: Metadata = {
  title: "Cresium",
  description: "Cresium dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <VerticalMenu>{children}</VerticalMenu>
      </body>
    </html>
  );
}

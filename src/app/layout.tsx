import type { Metadata } from "next";
import "./globals.css";
import { VerticalMenu } from "@/components/layout/VerticalMenu/VerticalMenu";
import StyledComponentsRegistry from "./registry";

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
        <StyledComponentsRegistry>
          {/*Sin esto, el css no se ve al entrar a una pagina por 1s por usar styled-components */}
          <VerticalMenu>{children}</VerticalMenu>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

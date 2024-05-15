import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";
import { VerticalMenu } from "@/components/layout/VerticalMenu/VerticalMenu";
import StyledComponentsRegistry from "./registry";
import ThemeProvider from "@/utils/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Cresium",
  description: "Cresium dashboard",
};

const heads = headers()
const pathname = heads.get('x-invoke-path')

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log("PATH ASYNC LAYOUT", pathname)

  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          <StyledComponentsRegistry>
            {/*Sin StyledComponentsRegistry, el css no se vera al entrar a una pagina por 1s por usar styled-components */}
            <VerticalMenu path={pathname}>{children}</VerticalMenu>
          </StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}

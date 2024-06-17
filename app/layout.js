import { Inter } from "next/font/google";
import { Providers } from "./providers";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Node And Blog",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg_body">
          <Providers className="w-full h-full">
            <header className="header">
              <SignedOut>
                <SignInButton />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </header>
            <main className="mian-container">{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}

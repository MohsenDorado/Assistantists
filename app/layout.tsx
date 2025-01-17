import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import AppoloProviderWrapper from "@/components/ApolloProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assistantists",
  description: "Create and raise your own AI !",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppoloProviderWrapper>
      <ClerkProvider>
        <html lang="en">
          <body className="flex min-h-screen">{children}</body>
        </html>
      </ClerkProvider>
    </AppoloProviderWrapper>
  );
}

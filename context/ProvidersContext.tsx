"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth";

interface ProviderProps {
    children: ReactNode;
    session?: Session;// You can replace `any` with `Session` if you import it from "next-auth"
}

export default function ProviderContext({ children, session }: ProviderProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

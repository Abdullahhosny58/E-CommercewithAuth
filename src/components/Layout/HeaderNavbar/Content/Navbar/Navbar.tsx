"use client";
import { Button, Flex } from "antd";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();

  console.log("session", session, status);

  return (
    <header>
      <Flex justify="space-between">
        <Flex align="center" justify="space-between">
          <ul className={styles.navList}>
            <li>
              <Link href="/">
                <Button type="text">Home</Button>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <Button type="text">Contact</Button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <Button type="text">About</Button>
              </Link>
            </li>
            {session ? (
              <Button type="text">Welcome, {session.user?.name}</Button>
            ) : (
              <Button type="text">
                <Link href="/SignIn">Sign In</Link>
              </Button>
            )}
            <Button type="text">
                <Link href="/admin">DashBoard</Link>
              </Button>
          </ul>
        </Flex>
      </Flex>
    </header>
  );
}

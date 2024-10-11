"use client";

import { Flex, Layout } from "antd";
import Image from "next/image";
import Link from "next/link";
import styles from "./header.module.scss";
import cimaLogo from "../../../public/images/cimaLogo.png";

function Header() {
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const { Header } = Layout;

  return (
    <Header className={styles.header}>
      <Flex
        justify="space-between"
        align="center"
        className={styles.headerContainer}
      >
        <Link href="/">
          <Flex justify="center" align="center">
            <Image
              width={110}
              height={100}
              alt="logo"
              src={cimaLogo}
              className={styles.logo}
            />
          </Flex>
        </Link>
        <Flex justify="space-between">
          <Flex>aaas</Flex>
        </Flex>
      </Flex>
    </Header>
  );
}

export default Header;

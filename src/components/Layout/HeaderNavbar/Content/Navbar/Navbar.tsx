"use client";
import { Flex  } from "antd";

import styles from "./Navbar.module.scss";
import Link from "next/link";

const Navbar = () => {

  return (
    <header>
      <Flex justify="space-between">
        
        <Flex align="center" justify="space-between">
          <ul className={styles.navList}>
            <Link  href={"/"}  className={styles.navItem}>Home</Link>
            <li className={styles.navItem}>Contact</li>
            <li className={styles.navItem}>About</li>
            <Link href={"/SignUp"} className={styles.navItem}>Sign Up</Link>
          </ul>
        </Flex>

      </Flex>
    </header>
  );
};

export default Navbar;

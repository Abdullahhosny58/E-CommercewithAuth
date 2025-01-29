"use client";
import { Flex  } from "antd";

import styles from "./Navbar.module.scss";

const Navbar = () => {

  return (
    <header>
      <Flex justify="space-between">
        
        <Flex align="center" justify="space-between">
          <ul className={styles.navList}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>Contact</li>
            <li className={styles.navItem}>About</li>
            <li className={styles.navItem}>Sign Up</li>
          </ul>
        </Flex>

      </Flex>
    </header>
  );
};

export default Navbar;

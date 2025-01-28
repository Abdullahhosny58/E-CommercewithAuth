"use clinte"

import { Flex, Typography } from "antd";
import Header from "../Header/Header";

const HeaderNavbar = () => {
  const { Title } = Typography;

    return (
      <header>
        <Header/>
        <Flex justify="space-around" >
            <Flex>
              <Title>
              Exclusive
              </Title>
              </Flex>
            <Flex>4</Flex>
            <Flex>3</Flex>
        </Flex>
      </header>
    );
  };
  
  export default HeaderNavbar;
  
import { useEffect, useState } from "react";
import { Typography, Row, Col, Flex } from "antd";

const { Text } = Typography;

const CountdownTimer = () => {
  const targetTime = new Date().getTime() + 1000 * 24 * 60 * 60 * 1000; // 3 days from now

  const calculateTimeLeft = () => {
    const difference = targetTime - new Date().getTime();
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Flex align="center" >
      <Row gutter={16} >
        {Object.entries(timeLeft).map(([label, value], index) => (
          <Col key={label}>
            <Text strong style={{ fontSize: 24 ,fontWeight:"bold" }}>
              {value.toString().padStart(2, "0")}
            </Text>
            <Text style={{ fontSize: 15,  }}>{label.charAt(0).toUpperCase() + label.slice(1)}</Text>
            {index !== 3 && <Text style={{ color: "red", fontSize: 20 }}> : </Text>}
          </Col>
        ))}
      </Row>
    </Flex>
  );
};

export default CountdownTimer;

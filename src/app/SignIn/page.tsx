"use client";

import React from "react";
import { Form, Input, Button, Typography, Flex } from "antd";
import { useForm, Controller } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import loginImage from "@/public/images/dl.beatsnoop 1.png";
import CustomNotification from "@/shared/Notification";
import styles from "./SignIn.module.scss";
import Image from "next/image";
import Link from "next/link";

type FormData = {
  email: string;
  password: string;
};
const { Title } = Typography;

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    console.log(data);

    const result = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (result?.error) {
      CustomNotification({
        type: "error",
        message: result.error || "Login failed",
      });
      return; // Stop execution if login fails
    }

    CustomNotification({
      type: "success",
      message: "Login successful!",
    });

    router.push("/"); // Redirect on success
  };

  return (
    <Flex className={styles.container} align="center" justify="space-around">
      <Flex>
        <Image src={loginImage} className={styles.loginImage} alt="login" />
      </Flex>
      <Flex vertical className={styles.box}>
        <Title level={3}>Log in to Exclusive</Title>
        <Title level={5}>Enter your details below</Title>
        <Flex>
          <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <Form.Item
              label="Email"
              validateStatus={errors.email ? "error" : undefined}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} type="email" />}
              />
            </Form.Item>

            {/* Password Field */}
            <Form.Item label="Password">
              <Controller
                name="password"
                control={control}
                render={({ field }) => <Input.Password {...field} />}
              />
            </Form.Item>

            <Form.Item>
              <Button className={styles.buttom} htmlType="submit">
                Sign In
              </Button>
              <Button type="text">
                <Link href="/SignIn">
                  I dont have an account? Create an account
                </Link>
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
}

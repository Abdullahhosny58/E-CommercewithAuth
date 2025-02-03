"use client";

import useRegister from "@/query/auth/postAccount";
import CustomNotification from "@/shared/Notification";
import { Button, Flex, Form, Input, Typography } from "antd";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import styles from "./SignUp.module.scss";
import Image from "next/image";
import loginImage from "@/public/images/dl.beatsnoop 1.png";
import Link from "next/link";
const { Title } = Typography;

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { mutate, isPending } = useRegister();
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    mutate(data, {
      onSuccess: (res) => {
        CustomNotification({
          type: "success",
          message: res?.message || "Success",
        });
        router.push("/SignIn"); // Ensure router.push() is used if it's Next.js
      },
      onError: (error) => {
        CustomNotification({
          type: "error",
          message: error?.message || "Something went wrong",
        });
      },
    });
  };

  return (
    <Flex className={styles.container} align="center" justify="space-around">
      <Flex>
        <Image src={loginImage} className={styles.loginImage} alt="singUp" />
      </Flex>
      <Flex vertical className={styles.box}>
        <Title level={3}>Create an account</Title>
        <Title level={5}>Enter your details below</Title>
        <Flex>
          <Form
            onFinish={handleSubmit(onSubmit)}
            layout="vertical"
            className={styles.from}
          >
            <Form.Item label="Email" help={errors.email?.message}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => <Input {...field} type="email" />}
              />
            </Form.Item>

            <Form.Item label="Name" help={errors.name?.message}>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} type="text" />}
              />
            </Form.Item>

            <Form.Item label="Password" help={errors.password?.message}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => <Input.Password {...field} />}
              />
            </Form.Item>

            <Form.Item>
              <Button
                className={styles.buttom}
                htmlType="submit"
                loading={isPending}
              >
                Sign Up
              </Button>
              <Button type="text">
                <Link href="/SignIn">Already have an account? Log in</Link>
              </Button>
            </Form.Item>
          </Form>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SignUp;

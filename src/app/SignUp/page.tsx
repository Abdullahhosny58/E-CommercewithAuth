"use client"

import useRegister from "@/query/auth/postAccount";
import { Button, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const { mutate, isPending } = useRegister();
  const router = useRouter();

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: ""
    }
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    mutate(data); // Pass the form data to the mutate function
  };

  return (
    <div style={{ maxWidth: 400, margin: '0 auto', padding: '2rem' }}>
      <h1>Sign Up</h1>
      <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
        <Form.Item
          label="Email"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: 'Please input your email!',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address'
              }
            }}
            render={({ field }) => <Input {...field} type="email" />}
          />
        </Form.Item>

        <Form.Item
          label="Name"
          validateStatus={errors.name ? "error" : ""}
          help={errors.name?.message}
        >
          <Controller
            name="name"
            control={control}
            rules={{ required: 'Please input your name!' }}
            render={({ field }) => <Input {...field} type="text" />}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Please input your password!' }}
            render={({ field }) => <Input.Password {...field} />}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={isPending}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
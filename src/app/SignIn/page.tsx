"use client";

import React from "react";
import { Form, Input, Button } from "antd";
import { useForm, Controller } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type FormData = {
  email: string;
  password: string;
};

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
      console.error("Login failed:", result.error);
      return; // Stop execution if login fails
    }
  
    router.push("/"); // Redirect on success
  };
  
  return (
    <div style={{ maxWidth: 400, margin: "0 auto", padding: "2rem" }}>
      <h1>Login</h1>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <Form.Item
          label="Email"
          validateStatus={errors.email ? "error" : undefined}
          help={errors.email?.message}
        >
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Please input your email!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format!",
              },
            }}
            render={({ field }) => <Input {...field} type="email" />}
          />
        </Form.Item>

        {/* Password Field */}
        <Form.Item
          label="Password"
          validateStatus={errors.password ? "error" : undefined}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            rules={{ required: "Please input your password!" }}
            render={({ field }) => <Input.Password {...field} />}
          />
        </Form.Item>

        {/* Submit Button */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>

      {/* Sign Up Link */}
      <p>
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

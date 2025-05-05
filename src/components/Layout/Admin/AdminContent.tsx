"use client";
import { useState } from "react";
import { ColumnsType } from "antd/es/table";
import { Button, Modal, Form, Input, Space, message } from "antd";
import CustomTable from "@/shared/Table/CustomTable";
import { useGetAllUser } from "@/query/users/getAllUsers";
import useDeleteUser from "@/query/users/DeleteUser";
import useUpdateUser from "@/query/users/UpdateUser";

interface DataType {
  id: number;
  username: string;
  email: string;
}

interface UserUpdate {
  username?: string;
  email?: string;
}

interface NewUser {
  username: string;
  email: string;
}

const AdminContent = () => {
  const { data, isLoading, refetch } = useGetAllUser();
  const deleteUserMutation = useDeleteUser();
  const updateUserMutation = useUpdateUser();

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<DataType | null>(null);

  const [form] = Form.useForm();
  const itemsPerPage = 10;

  const users: DataType[] = data || [];
  const totalRecords = users.length;
  const totalPages = Math.ceil(totalRecords / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = users.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCreate = () => {
    setEditingUser(null);
    form.resetFields();
    setIsModalOpen(true);
  };

  const handleEdit = (user: DataType) => {
    setEditingUser(user);
    form.setFieldsValue(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    Modal.confirm({
      title: "Are you sure you want to delete this user?",
      onOk: () => {
        deleteUserMutation.mutate(id, {
          onSuccess: () => {
            message.success("User deleted successfully");
            refetch();
          },
          onError: () => {
            message.error("Failed to delete user");
          },
        });
      },
    });
  };

  const handleModalOk = () => {
    form
      .validateFields()
      .then((values: UserUpdate) => {
        // Ensure that username and email are defined
        const user: NewUser = {
          username: values.username || "",  // Provide default value if undefined
          email: values.email || "",         // Provide default value if undefined
        };

        if (editingUser) {
          // Update user logic
          updateUserMutation.mutate(
            { id: editingUser.id, user },
            {
              onSuccess: () => {
                message.success("User updated successfully");
                refetch();
                setIsModalOpen(false);
                form.resetFields();
              },
              onError: () => {
                message.error("Failed to update user");
              },
            }
          );
        } else {
          // Create user logic (you can implement this as a separate mutation if needed)
          console.log("Creating user:", user);
          message.success("User created (placeholder)");
          setIsModalOpen(false);
          form.resetFields();
          refetch();
        }
      })
      .catch((error) => {
        console.error("Form validation failed:", error);
      });
  };

  const columns: ColumnsType<DataType> = [
    { title: "Number", dataIndex: "id", key: "id" },
    { title: "Username", dataIndex: "username", key: "username" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button type="link" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Button type="link" danger onClick={() => handleDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div
      style={{
        height: "80vh",
        overflowY: "auto",
        maxWidth: "100%",
        overflowX: "auto",
        padding: 16,
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
        <Button type="primary" onClick={handleCreate}>
          Create User
        </Button>
      </div>

      <CustomTable
        dataSource={paginatedData}
        columns={columns}
        onPageChange={handlePageChange}
        page={currentPage}
        items={itemsPerPage}
        pages={totalPages}
        loading={isLoading}
        scroll={{ x: "max-content" }}
      />

      <Modal
        title={editingUser ? "Edit User" : "Create User"}
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={() => {
          setIsModalOpen(false);
          form.resetFields();
        }}
        okText={editingUser ? "Update" : "Create"}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: "Please input a username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input an email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminContent;

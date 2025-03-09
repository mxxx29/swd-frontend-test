"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Form, Input, Modal, Space } from "antd";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import { RootState } from "@/store";
import { addUser, deleteUser, updateUser } from "@/slices/userSlice";

const { Item } = Form;

export default function HomePage() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.user.users);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [form] = Form.useForm();

  const openModal = (user: any = null) => {
    if (user) {
      setIsEditing(true);
      form.setFieldsValue(user);
      setCurrentUser(user);
    } else {
      setIsEditing(false);
      form.resetFields();
    }
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setCurrentUser(null);
  };

  const handleSave = () => {
    form.validateFields().then((values) => {
      if (isEditing) {
        dispatch(updateUser({ ...values, id: currentUser.id }));
      } else {
        dispatch(addUser({ ...values, id: uuidv4() }));
      }
      closeModal();
    });
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  return (
    <div style={{ padding: 16, height: "100%" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "20px",
        }}
      >
        <Button type="primary" onClick={() => openModal()}>
          {t("addUser")}
        </Button>
      </div>
      <Table
        dataSource={users}
        columns={[
          { title: t("name"), dataIndex: "name", width: 250 },
          { title: t("email"), dataIndex: "email", width: 250 },
          { title: t("phone"), dataIndex: "phone", width: 250 },
          {
            title: t("actions"),
            render: (_: any, record: any) => (
              <Space>
                <Button onClick={() => openModal(record)}>{t("edit")}</Button>
                <Button danger onClick={() => handleDelete(record.id)}>
                  {t("delete")}
                </Button>
              </Space>
            ),
            width: 100,
          },
        ]}
        rowKey="id"
        pagination={{
          pageSize: 5,
          total: users.length,
        }}
      />
      <Modal
        title={isEditing ? t("editUser") : t("addUser")}
        visible={isModalVisible}
        onCancel={closeModal}
        onOk={handleSave}
      >
        <Form form={form} layout="vertical">
          <Item name="name" label={t("name")} rules={[{ required: true }]}>
            <Input />
          </Item>
          <Item name="email" label={t("email")} rules={[{ required: true }]}>
            <Input />
          </Item>
          <Item name="phone" label={t("phone")} rules={[{ required: true }]}>
            <Input />
          </Item>
        </Form>
      </Modal>
    </div>
  );
}

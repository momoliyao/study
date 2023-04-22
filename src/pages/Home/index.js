import React from 'react';
import { Input, Button, Checkbox, Divider } from 'antd';
import { SimpleForm } from '@whalecloud/fdx';
import styles from './index.less';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 12 },
};
const tailLayout = {
  wrapperCol: { offset: 4, span: 12 },
};

const { TextArea } = Input;

const Home = () => {
  const [form] = SimpleForm.useForm();

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };

  return (
    <>
      <Divider
        style={{
          borderWidth: 2,
          borderColor: '#7cb305',
        }}
      >12344
      </Divider>
      <Divider
        className={styles.divi}
        dashed
      />
      <Divider type="vertical" />
      <Divider type="vertical">
        1224
      </Divider>
      <TextArea
        showCount
        maxLength={300}
        style={{ height: 120 }}
        placeholder="can resize"
      />
      <SimpleForm
        {...layout}
        name="basic"
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <SimpleForm.Item
          label="Username"
          name="username"
        >
          <Input.TextArea
            // placeholder="Autosize height with minimum and maximum number of lines"
            autoSize={{ minRows: 3, maxRows: 3 }}
          />
        </SimpleForm.Item>
        <SimpleForm.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </SimpleForm.Item>

        <SimpleForm.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </SimpleForm.Item>
      </SimpleForm>
    </>

  );
};

export default Home;
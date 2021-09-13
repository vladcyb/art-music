import { Button, Col, Form, Input, Row } from 'antd';
import './CallBack.scss';

export const CallBack = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Row justify="center">
      <Col xs={24} md={16} lg={16} xl={12} xxl={8}>
        <div className="card callback">
          <h2>Заказать бесплатный&nbsp;звонок</h2>
          <Form
            layout="vertical"
            onFinish={onSubmit}
          >
            <Form.Item label="Как к вам обращаться:">
              <Input name="name" />
            </Form.Item>
            <Form.Item label="Телефон:">
              <Input name="phone" />
            </Form.Item>
            <Form.Item label="Email:">
              <Input name="email" />
            </Form.Item>
            <Form.Item noStyle>
              <Button type="primary" htmlType="submit" block>
                Отправить
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

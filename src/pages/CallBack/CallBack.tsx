import { Button, Card, Col, Form, Input, Row } from 'antd';
import './CallBack.scss';

export const CallBack = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <section className="callback">
      <h2>Заказать бесплатный звонок</h2>
      <Row justify="center">
        <Col sm={10}>
          <Card>
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
              <Form.Item>
                <Button type="primary" htmlType="submit" block>
                Отправить
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

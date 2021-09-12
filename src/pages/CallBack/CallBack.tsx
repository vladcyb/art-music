import { Button, Card, Col, Form, Input, Row } from 'antd';
import './CallBack.scss';

export const CallBack = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Row justify="center">
      <Col sm={12}>
        <Card className="section callback">
          <Row justify="center">
            <Col sm={24}>
              <h2>Заказать бесплатный звонок</h2>
            </Col>
          </Row>
          <Row justify="center">
            <Col sm={24}>
              <Card className="callback__card">
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
              </Card>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

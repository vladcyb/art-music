import { Button, Card, Col, Form, Input, Row } from 'antd';
import './CallBack.scss';

export const CallBack = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Row justify="center">
      <Col xs={24} sm={18} lg={16} xl={14} xxl={12}>
        <Card className="card callback">
          <Row justify="center">
            <Col xs={24}>
              <h2>Заказать бесплатный&nbsp;звонок</h2>
            </Col>
            <Col xs={24}>
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

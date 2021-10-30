import { Button, Col, Form, Input, Row } from 'antd';
import MaskedInput from 'antd-mask-input';
import { MyCard, ViewportContainer } from '../../components';
import { standardGutter } from '../../shared/constants/gutter';
import './CallBack.scss';

export const CallBack = () => {
  const onSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Row
      className="callback"
      justify="center"
      gutter={{ ...standardGutter }}
    >
      <Col xs={24} md={16} lg={16} xl={12} xxl={8}>
        <ViewportContainer>
          <MyCard>
            <h2 className="callback__title">Заказать звонок</h2>
            <Form
              layout="vertical"
              onFinish={onSubmit}
            >
              <Form.Item label="Как к вам обращаться:">
                <Input name="name" />
              </Form.Item>
              <Form.Item label="Телефон:">
                <MaskedInput
                  mask="(111) 111-11-11"
                  name="phone"
                  prefix="+7"
                />
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
          </MyCard>
        </ViewportContainer>
      </Col>
    </Row>
  );
};

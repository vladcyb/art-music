import { Card, Col, Row } from 'antd';

export const Contacts = () => (
  <Row className="section" id="contacts">
    <Col className="contacts" xs={12} sm={12}>
      <Card bordered={false}>
        <h2>Контакты</h2>
        <div className="contacts__content">
          <p>
            Адрес: г. Воронеж, ул. Машиностроителей, д. 82
          </p>
          <p>
            Телефон:&nbsp;
            <a href="tel:+79204022299">+7 920 402-22-99</a>,&nbsp;
            <a href="tel:+79202170035">+7 920 217-00-35</a>
          </p>
          <p>
            Email: <a href="mailto:vmb36@yandex.ru">vmb36@yandex.ru</a>
          </p>
        </div>
      </Card>
    </Col>
  </Row>
);

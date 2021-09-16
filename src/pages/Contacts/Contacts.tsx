import { Col, Row } from 'antd';
import './Contacts.scss';

export const Contacts = () => (
  <Row>
    <Col className="contacts" xs={24} xl={14}>
      <div className="card" id="contacts">
        <h2>Контакты</h2>
        <div className="contacts__content">
          <p>
            <span>Адрес:</span>
            {' '}
            <a href="https://yandex.ru/maps/-/CCUm6LwtdC">
            г. Воронеж, ул. Машиностроителей, д.&nbsp;82</a>
          </p>
          <p>
            <span>Телефон:</span>
            {' '}
            <a className="contacts__phone" href="tel:+79204022299">+7 920 402-22-99</a>,{' '}
            <a className="contacts__phone" href="tel:+79202170035">+7 920 217-00-35</a>
          </p>
          <p>
            <span>Email:</span>
            {' '}
            <a href="mailto:vmb36@yandex.ru">vmb36@yandex.ru</a>
          </p>
        </div>
      </div>
    </Col>
  </Row>
);

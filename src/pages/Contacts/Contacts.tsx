import { Col, Row } from 'antd';
import { standardGutter } from '../../shared/constants/gutter';
import './Contacts.scss';

export const Contacts = () => (
  <Row
    className="contacts"
    id="contacts"
    justify="center"
    align="middle"
    gutter={{ ...standardGutter }}
  >
    <Col xs={24} xl={14}>
      <h3>Контакты</h3>
      <p>
        <span>Адрес:</span>
        <a className="contacts__value" href="https://yandex.ru/maps/-/CCUm6LwtdC">
            г. Воронеж, ул.&nbsp;Машиностроителей,&nbsp;д.&nbsp;82
        </a>
      </p>
      <p>
        <span>Телефон:</span>
        <span className="contacts__value">
          <a className="contacts__phone" href="tel:+79202170035">+7 920 217-00-35</a>
        </span>
      </p>
      <p>
        <span>Email:</span>
        <a className="contacts__value" href="mailto:vmb36@yandex.ru">vmb36@yandex.ru</a>
      </p>
    </Col>
  </Row>
);

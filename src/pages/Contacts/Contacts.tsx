import { Col, Row } from 'antd';
import { standardGutter } from '../../shared/constants/gutter';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Contacts.scss';

export const Contacts = () => {
  const [highlighted, setHighlighted] = useState(false);

  const highlight = () => {
    setTimeout(() => setHighlighted(true), 200);
    setTimeout(() => setHighlighted(false), 1200);
  };

  useEffect(() => {
    const contactsLink = document.querySelector('.navbar__contacts');
    contactsLink?.addEventListener('click', highlight);

    return () => contactsLink?.removeEventListener('click', highlight);
  }, []);

  return (
    <Row
      className={classNames('contacts', {
        contacts_highlighted: highlighted,
      })}
      id="contacts"
      justify="center"
      align="middle"
      gutter={{ ...standardGutter }}
    >
      <Col xs={24} xl={12}>
        <h3>Контакты</h3>
        <p>
          <span>Адрес:</span>
          <a className="contacts__value" href="https://yandex.ru/maps/-/CCUm6LwtdC" target="_blank" rel="noreferrer">
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
};

import { Col, Row } from 'antd';
import { standardGutter } from '../../shared/constants/gutter';
import './About.scss';


export const About = () => (
  <Row
    className="about"
    id="rent"
    justify="center"
    align="middle"
    gutter={{ ...standardGutter }}
  >
    <Col className="about__img" xs={9}>
      <img className="about__img" src="/i/noGKu5ogN9Q.jpg" alt="" />
    </Col>
    <Col xs={15}>
      <h2>Аренда и сборка сцены</h2>
      <p>
        Наша компания предоставляет полный спектр сценического оборудования:
      </p>
      <ul>
        <li>Сценические экраны</li>
        <li>Акустические системы</li>
        <li>Радиомикрофоны</li>
        <li>Системы In Ear</li>
        <li>Шнуровые микрофоны</li>
        <li>Ударные установки и комплектующие к ним</li>
        <li>Стойки</li>
        <li>Микшерные пульты</li>
        <li>Гитарное усиление</li>
        <li>DI-BOX&apos;s</li>
        <li>Мультикоры</li>
        <li>Коммутация</li>
        <li>Элементы сцены</li>
        <li>Световое оборудование и DMX-пульты</li>
        <li>MIDI контроллеры</li>
      </ul>
      <p>
        Также мы предоставляем услуги монтажа и коммутирования оборудования на сцене.
        Разработка дизайн-проекта, установка ферм и крепеж световых приборов.
        Протягивание кабеля, соединение с контроллером и подключение к сети.
      </p>
    </Col>
  </Row>
);

import { Col, Row } from 'antd';
import { standardGutter } from '../../shared/constants/gutter';
import { ViewportContainer } from '../../components';
import './Payment.scss';

export const Payment = () => (
  <Row
    className="payment"
    justify="center"
    gutter={{ ...standardGutter }}
  >
    <Col sm={24}>
      <ViewportContainer>
        <h2>Оплата и доставка</h2>
        <p>
          Мы доставляем заказы по всей России следующими транспортными компаниями:
        </p>
        <ul>
          <li>СДЭК</li>
          <li>Деловые линии</li>
          <li>Почта России</li>
        </ul>
        <p>
        Самовывоз в г. Воронеж производится по&nbsp;адресу ул. Машиностроителей, д. 82.
        </p>
        <ul>
          <li>
          Доставка крупногабаритного, дорогостоящего товара или отправка
          в труднодоступные регионы, рассчитывается в индивидуальном порядке,
          окончательную стоимость рассчитает менеджер интернет-магазина.
          </li>
          <li>
          Для хрупких товаров при отправке через транспортные компании
          требуется дополнительная защитная обрешетка,
          которая оплачивается покупателем.
          </li>
          <li>
          Наша компания несет ответственность за товар до момента его
          передачи в транспортную компанию.
          </li>
          <li>
          Стоимость доставки товаров по акции, распродаже или по
          промокоду оплачивает покупатель не зависимо от суммы покупки,
          в том числе при покупке свыше 5000 рублей.
          </li>
        </ul>
      </ViewportContainer>
    </Col>
  </Row>
);

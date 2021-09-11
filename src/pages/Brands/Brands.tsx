import './Brands.scss';
import { Col, Row } from 'antd';

export const Brands = () => (
  <section className="brands" id="brands">
    <Row justify="center">
      <Col>
        <h2>Наши бренды</h2>
      </Col>
    </Row>
    <Row justify="center">
      <Col>
        <ul>
          <li>Yamaha</li>
          <li>Das Audio</li>
          <li>Turbosound</li>
          <li>Fender</li>
          <li>XLine</li>
        </ul>
      </Col>
    </Row>
  </section>
);

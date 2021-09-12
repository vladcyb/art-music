import { Card, Col, Row } from 'antd';
import './Brands.scss';

export const Brands = () => (
  <Card className="section brands" id="brands">
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
  </Card>
);

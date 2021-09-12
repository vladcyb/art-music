import { Card, Col, Row } from 'antd';
import './Brands.scss';

export const Brands = () => (
  <Row className="brands" justify="center" id="brands">
    <Col xs={24}>
      <Card className="card">
        <h2>Наши бренды</h2><Row className="brands" justify="center" id="brands">
          <Col xs={12} sm={6} lg={4}>
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
    </Col>
  </Row>
);

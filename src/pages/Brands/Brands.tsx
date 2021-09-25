import { Col, Row } from 'antd';
import { MyCard } from '../../components/MyCard';
import { ViewportContainer } from '../../components/ViewportContainer';
import './Brands.scss';

export const Brands = () => (
  <Row className="brands" justify="center" id="brands">
    <Col xs={24}>
      <ViewportContainer>
        <MyCard>
          <h2>Наши бренды</h2>
          <ul>
            <li>Yamaha</li>
            <li>Das&nbsp;Audio</li>
            <li>Turbosound</li>
            <li>Fender</li>
            <li>XLine</li>
          </ul>
        </MyCard>
      </ViewportContainer>
    </Col>
  </Row>
);

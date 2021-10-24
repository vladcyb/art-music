import { Col, Row } from 'antd';
import { standardGutter } from '../../shared/constants/gutter';
import './Brands.scss';

export const Brands = () => (
  <Row className="brands" justify="center" id="brands">
    <Col xs={24}>
      <h2>Наши бренды</h2>
      <Row
        justify="center"
        gutter={{ ...standardGutter }}
      >
        <Col>
          <h3>Звуковое оборудование и музыкальные инструменты:</h3>
          <ul>
            <li>Mackie</li>
            <li>Yamaha</li>
            <li>Das&nbsp;Audio</li>
            <li>Turbosound</li>
            <li>Fender</li>
            <li>XLine</li>
            <li>Electro-Voice</li>
            <li>JBL</li>
            <li>KORG</li>
            <li>FOCUSRITE</li>
            <li>AKG</li>
            <li>BEHRINGER</li>
            <li>Schecter</li>
            <li>Artesia</li>
            <li>Ringway</li>
            <li>SE Audiotechnik</li>
            <li>Phonic</li>
          </ul>
        </Col>
        <Col>
          <h3>Световое оборудование:</h3>
          <ul>
            <li>INVOLIGHT</li>
            <li>ADJ</li>
            <li>Highendled</li>
            <li>Robe</li>
            <li>XLine Light</li>
            <li>Imlight</li>
            <li>CHAUVET-PRO</li>
            <li>TAMA</li>
          </ul>
        </Col>
        <Col>
          <h3>Аксессуары и коммутация:</h3>
          <ul>
            <li>GATOR</li>
            <li>ONSTAGE</li>
            <li>PLANET WAVES</li>
            <li>PROEL</li>
            <li>TEMPO</li>
            <li>AMPHENOL</li>
            <li>D&apos;Addario</li>
          </ul>
        </Col>
      </Row>
    </Col>
  </Row>
);

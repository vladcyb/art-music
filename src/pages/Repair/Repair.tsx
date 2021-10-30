import { Col, Row } from 'antd';
import { standardGutter } from '../../shared/constants/gutter';
import { ViewportContainer } from '../../components';
import './Repair.scss';

export const Repair = () => (
  <Row
    className="repair"
    id="repair"
    wrap
    gutter={{ ...standardGutter }}
    justify="center"
    align="middle"
  >
    <Col xs={8}>
      <ViewportContainer>
        <h1>Ремонт</h1>
        <p>
          Наша компания предоставляет услуги
          по&nbsp;ремонту электромузыкального оборудования&nbsp;и
          световых приборов:
        </p>
        <ul>
          <li>Перемотка динамиков</li>
          <li>Процессоры и педали эффектов</li>
          <li>Усилители</li>
        </ul>
      </ViewportContainer>
    </Col>
    <Col xs={12}>
      <img className="repair__img-1" src="/i/igcT_iZ-ELY.jpg" alt="" />
    </Col>
  </Row>
);

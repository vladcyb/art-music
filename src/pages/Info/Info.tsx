import { Col, Row } from 'antd';
import { standardGutter } from '../../shared/constants/gutter';
import './Info.scss';


export const Info = () => (
  <section className="info">
    <div className="info__wrapper">
      <h1 className="info__title">
        Art-Music
      </h1>
      <div className="info__content-wrapper">
        <Row className="info__content"
          wrap
          gutter={{ ...standardGutter }}
          justify="center"
          align="middle"
        >
          <Col className="info__logo-wrapper" xs={0} sm={4} md={6} lg={6} xl={4}>
            <img className="info__logo" src="/i/logo.svg" alt="Логотоп Art-Music" />
          </Col>
          <Col xs={22} sm={18} md={16} lg={14} xl={12}>
            <p>
              ООО &quot;Арт-Мьюзик&quot; занимается поставкой и арендой звукового и
              светового оборудования, а&nbsp;также их монтажем. В том числе
              мы предлагаем широкий выбор любых музыкальных инструментов
              от разных брендов, среди которых{' '}
              <b>Yamaha</b>,{' '}
              <b>Das&nbsp;Audio</b>,{' '}
              <b>Turbosound</b>,{' '}
              <b>Fender</b>,{' '}
              <b>Line</b>{' '}
              и другие.
            </p>
            <p>
              Также мы участвуем в государственных закупках по закону №44-ФЗ
              и №223-ФЗ.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  </section>
);

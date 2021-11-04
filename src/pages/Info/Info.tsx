import { Col, Row } from 'antd';
import { standardGutter } from '../../shared/constants/gutter';
import { Logo } from '../../components';
import './Info.scss';


export const Info = () => (
  <section className="info">
    <div className="info__wrapper">
      <div className="info__content-wrapper">
        <h1 className="info__title">
          Art-Music
        </h1>
        <Row className="info__content"
          wrap
          gutter={{ ...standardGutter }}
          justify="center"
          align="middle"
        >
          <Col className="info__logo-wrapper" xs={0} sm={4} md={6} lg={4}>
            <Logo className="info__logo" />
          </Col>
          <Col xs={22} sm={16} md={14} lg={12}>
            <p>
              ООО &quot;Арт-Мьюзик&quot; занимается поставкой и&nbsp;арендой
              звукового и&nbsp;светового оборудования, а&nbsp;также их монтажем.<br />
              В том числе  мы предлагаем широкий выбор любых музыкальных инструментов
              от&nbsp;разных брендов.
            </p>
            <p>
              Мы принимаем участие в государственных закупках по закону №44-ФЗ
              и №223-ФЗ и составляем техническое задание на заказ.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  </section>
);

import { BsSpeaker, GiDrum, GiGuitarHead, GiPianoKeys, GiViolin } from 'react-icons/all';
import { Col, Row } from 'antd';
import { Fragment } from 'react';
import { standardGutter } from '../../shared/constants/gutter';
import './Info.scss';

const musicIcons = [
  {
    id: 1,
    component: <GiPianoKeys />,
  },
  {
    id: 2,
    component: <BsSpeaker />,
  },
  {
    id: 3,
    component: <GiGuitarHead />,
  },
  {
    id: 4,
    component: <GiDrum />,
  },
  {
    id: 5,
    component: <GiViolin />,
  },
];


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
    <Row justify="center">
      <Col sm={24}>
        <div className="info__icons">
          {musicIcons.map((item) => (
            <Fragment key={item.id}>
              {item.component}
            </Fragment>
          ))}
        </div>
      </Col>
    </Row>
  </section>
);

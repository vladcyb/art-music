import { BsSpeaker, GiDrum, GiGuitarHead, GiPianoKeys, GiViolin } from 'react-icons/all';
import { CSSTransition } from 'react-transition-group';
import { Logo } from '../../components/icons';
import { Col, Row } from 'antd';
import './Info.scss';
import { Fragment } from 'react';

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
      <CSSTransition
        className="info__title"
        appear
        in
        timeout={0}
      >
        <h1>
          Art-Music
        </h1>
      </CSSTransition>
      <CSSTransition appear in timeout={0}>
        <div className="info__content-wrapper">
          <Row className="info__content"
            wrap
            // gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
            justify="start"
            align="middle"
          >
            <Col offset={3} className="info__logo-wrapper" sm={6}>
              <Logo width="12em" height="12em" />
            </Col>
            <Col sm={8}>
              <p>
                ООО &quot;Арт-Мьюзик&quot; занимается поставкой и арендой звукового и
                светового оборудования, а также их монтажем. В том числе
                мы предлагаем широкий выбор любых музыкальных инструментов
                от разных брендов, среди которых Yamaha, Das Audio, Turbosound,
                Fender, XLine и другие.
              </p>
              <p>
                Также мы участвуем в государственных закупках по закону №44-ФЗ
                и №223-ФЗ.
              </p>
            </Col>
          </Row>
        </div>
      </CSSTransition>
    </div>
    <Row justify="center">
      <Col sm={18}>
        <CSSTransition className="info__icons" appear in timeout={0}>
          <div>
            {musicIcons.map((item) => (
              <Fragment key={item.id}>
                {item.component}
              </Fragment>
            ))}
          </div>
        </CSSTransition>
      </Col>
    </Row>
  </section>
);

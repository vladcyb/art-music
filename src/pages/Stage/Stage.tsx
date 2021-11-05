import { standardGutter } from '../../shared/constants/gutter';
import { Col, Row } from 'antd';
import './Stage.scss';


export const Stage = () => (
  <div className="stage" id="stage">
    <Row
      className="stage__services"
      wrap
      gutter={{ ...standardGutter }}
      justify="center"
      align="top"
    >
      <Col xs={24}>
        <h1 className="stage__title">Одежда сцены</h1>
        <h3 className="stage__subtitle">В наши услуги по обустройству сцены входит:</h3>
        <ul className="stage__services-list">
          <li>
            <span>
              Замер помещения и выбор наилучшего варианта одежды сцены
            </span>
          </li>
          <li>
            <span>
              Разработка дизайн-проекта для концертных и театральных залов
            </span>
          </li>
          <li>
            <span>
              Установка и монтаж конструктивных элементов
            </span>
          </li>
        </ul>
      </Col>
    </Row>
    <Row
      wrap
      gutter={{ ...standardGutter }}
      justify="center"
      align="middle"
    >
      <Col xs={24} md={10} xl={8} xxl={10}>
        <img className="stage__img" src="/i/FU9UuCVgikc.jpg" alt="Схема сцены" />
      </Col>
      <Col xs={0} md={1} />
      <Col xs={24} md={12} xl={13}>
        <ol className="stage__scheme">
          <li>Механизм декорационного подъема</li>
          <li>Механизм софитного подъема (на вальной лебедке)</li>
          <li>Софитная ферма</li>
          <li>Выносной софит</li>
          <li>Рамы бокового света зала</li>
          <li>Театральные мобильные станки с регулируемой высотой</li>
          <li>Арлекин</li>
          <li>Пульт управления (пульт машиниста сцены)</li>
          <li>Антрактно-раздвижной занавес с механизмом раздвижки</li>
          <li>Кулисы</li>
          <li>Задник</li>
          <li>Поплановые световые прострелы сцены</li>
          <li>Штанкетные подъемы</li>
        </ol>
      </Col>
    </Row>
  </div>
);

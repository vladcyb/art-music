import { standardGutter } from '../../shared/constants/gutter';
import { Col, Row } from 'antd';
import './Stage.scss';

// const serviceList: string[] = [
//   'Замер помещения и выбор наилучшего варианта одежды сцены',
//   'Разработка дизайн-проекта для концертных и театральных залов',
//   'Установка и монтаж конструктивных элементов',
// ];


export const Stage = () => {
  // const [isListVisible, setIsListVisible] = useState(false);

  // const toggle = () => {
  //   setIsListVisible((v) => !v);
  // };
  // console.log(isListVisible);

  return (
    <div className="stage">
      <Row
        className="stage__services"
        wrap
        gutter={{ ...standardGutter }}
        justify="center"
        align="top"
      >
        <Col xs={16}>
          <h2>Одежда сцены</h2>
          <p>
            <b>В наши услуги по обустройству сцены входит:</b>
          </p>
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
        <Col xs={12}>
          <img className="stage__img" src="/i/FU9UuCVgikc.jpg" alt="" />
        </Col>
        <Col xs={12}>
          <ol>
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
};

import { BsSpeaker, GiDrum, GiGuitarHead, GiPianoKeys, GiViolin } from 'react-icons/all';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Appear } from '../../components/HOCs/Appear';
import { PageTitle } from './PageTitle';
import './Info.scss';
import { Logo } from '../../components/icons';

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

export const Info = () => {
  return (
    <section className="info">
      <div className="info__content-wrapper">
        <PageTitle />
        <Appear timeout={500}>
          <div className="info__content">
            <div className="info__content-logo">
              <Logo width={300} height={300} />
            </div>
            <div className="info__content-text">
              <p>
                ООО &quot;Арт-Мьюзик&quot; занимается поставкой и арендой звукового и
                светового оборудования, а также их монтажем. В том числе
                мы предлагаем широкий выбор любых музыкальных инструментов
                от разных брендов, среди которых Yamaha, Das Audio, Turbosound,
                Fender, Xline и другие.
              </p>
              <p>
                Также мы участвуем в государственных закупках по закону №44-ФЗ
                и №223-ФЗ.
              </p>
            </div>
          </div>
        </Appear>
      </div>
      <TransitionGroup className="info__icons">
        {musicIcons.map((item, i) => (
          <CSSTransition
            appear
            in
            timeout={1000 + 100 * i}
            classNames={{ appear: 'a', appearDone: 'b' }}
            key={item.id}
          >
            {item.component}
          </CSSTransition>
        ))}
      </TransitionGroup>
    </section>
  );
};

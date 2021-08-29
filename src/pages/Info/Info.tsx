import { BsSpeaker, GiDrum, GiGuitarHead, GiPianoKeys, GiViolin } from 'react-icons/all';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Appear } from '../../components/HOCs/Appear';
import { PageTitle } from './PageTitle';
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

export const Info = () => {
  return (
    <section className="info">
      <div className="info__content-wrapper">
        <PageTitle />
        <Appear timeout={500}>
          <div className="info__content">
            Идейные соображения высшего порядка,
            а также дальнейшее развитие различных
            форм деятельности позволяет оценить
            значение новых предложений. Разнообразный
            и богатый опыт консультация с широким активом
            обеспечивает широкому кругу. Не следует, однако забывать,
            что дальнейшее развитие различных форм деятельности способствует
            подготовки и реализации форм развития.
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

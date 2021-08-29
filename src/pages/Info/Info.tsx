import './Info.scss';
import {CSSTransition} from 'react-transition-group';

export const Info = () => (
  <section className="info">
    <div className="info__content">
      <CSSTransition in timeout={5000} appear>
        <h1 className="info__header">Art-Music</h1>
      </CSSTransition>
      бла бла бла бла бла бла бла бла бла
      бла бла бла бла бла бла бла бла бла
      бла бла бла бла бла бла бла бла бла
      бла бла бла бла бла бла бла бла бла
      бла бла бла бла бла бла бла бла бла
      бла бла бла бла бла бла бла бла бла
      бла бла бла бла бла бла бла бла бла
    </div>
  </section>
);

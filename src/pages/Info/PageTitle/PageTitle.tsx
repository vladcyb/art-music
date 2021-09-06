import classNames from 'classnames';
import { useScrollPosition } from '../../../shared/hooks/useScrollPosition';
import { CSSTransition } from 'react-transition-group';
import './PageTitle.scss';

export const PageTitle = () => {
  const position = useScrollPosition();
  const headerStart = position > 75;

  return (
    <CSSTransition
      className={classNames('page-title', {
        'page-title_on-top': headerStart,
      })}
      appear
      in
      timeout={0}
    >
      <h1
        style={{
          fontSize: headerStart ? '24px' : `${40 - 0.15 * position}px`,
          transform: headerStart ? 'translateY(-108px)' : `translateY(${Math.max(-position, -108)}px)`,
        }}
      >
        Art-Music
      </h1>
    </CSSTransition>
  );
};

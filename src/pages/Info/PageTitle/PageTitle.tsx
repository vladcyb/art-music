import { Appear } from '../../../components/HOCs/Appear';
import classNames from 'classnames';
import { useScrollPosition } from '../../../shared/hooks/useScrollPosition';
import './PageTitle.scss';

export const PageTitle = () => {
  const position = useScrollPosition();
  const headerStart = position > 75;
  const headerEnd = position > 108;

  if (headerStart === null) {
    return null;
  }

  return (
    <Appear>
      <div className="page-title">
        <h1
          className={classNames({
            'page-title_on-top': headerStart,
          })}
          style={{
            fontSize: headerEnd ? '24px' : `${40 - 0.15 * position}px`,
            transform: `translateY(${Math.max(-position, -108)}px)`,
          }}
        >
          <span>A</span>rt-Music
        </h1>
      </div>
    </Appear>
  );
};

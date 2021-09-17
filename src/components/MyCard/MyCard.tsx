import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';

interface IMyCard extends HTMLAttributes<HTMLDivElement> {}

export const MyCard = ({ className, children, ...props }: PropsWithChildren<IMyCard>) => {
  return (
    <div className={classNames(className, 'card')} {...props}>
      {children}
    </div>
  );
};

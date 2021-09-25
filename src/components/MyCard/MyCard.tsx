import classNames from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';
import './MyCard.scss';

export const MyCard = ({
  className,
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => (
  <div className={classNames(className, 'card')} {...props}>
    {children}
  </div>
);

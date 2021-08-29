import { PropsWithChildren } from 'react';
import { CSSTransition } from 'react-transition-group';

interface IAppearProps {
  timeout?: number
}

export const Appear = ({ timeout = 0, children }: PropsWithChildren<IAppearProps>) => (
  <CSSTransition
    appear
    in
    timeout={timeout}
    classNames={{ appear: 'a', appearDone: 'b' }}
  >
    {children}
  </CSSTransition>
);

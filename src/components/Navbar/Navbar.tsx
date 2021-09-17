import { Anchor, Layout } from 'antd';
import classNames from 'classnames';
import { useScrollDirection } from '../../shared/hooks/useScrollDirection';
import './navbar.scss';
import { memo } from 'react';

const { Header } = Layout;
const { Link } = Anchor;


type LinkType = {
  name: string,
  key: string,
}

const links: LinkType[] = [
  {
    name: 'Бренды',
    key: '#brands',
  },
  {
    name: 'О нас',
    key: '#about',
  },
  {
    name: 'Контакты',
    key: '#contacts',
  },
];

export const Navbar = () => {
  const scrollDown = useScrollDirection();
  return <Render scrollDown={scrollDown} />;
};

interface IRenderProps {
  scrollDown: boolean;
}

// eslint-disable-next-line react/display-name
const Render = memo(({ scrollDown }: IRenderProps) => (
  <Header className={classNames('navbar', {
    navbar_hidden: scrollDown,
  })}>
    <Anchor bounds={200} targetOffset={84}>
      {links.map((link) => (
        <Link href={link.key} title={link.name} key={link.key} />
      ))}
    </Anchor>
  </Header>
), (prevProps, nextProps) => (
  prevProps.scrollDown === nextProps.scrollDown
));

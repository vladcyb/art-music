import { Anchor, Layout } from 'antd';
import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import './navbar.scss';

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
  const [down, setDown] = useState(false);
  const prevScrollY = useRef(window.scrollY);

  const handleScroll = () => {
    prevScrollY.current = window.scrollY;
  };

  const handlePageScroll = () => {
    setDown(window.scrollY > prevScrollY.current);
    handleScroll();
  };

  useEffect(() => {
    window.addEventListener('scroll', handlePageScroll);

    return () => {
      window.removeEventListener('scroll', handlePageScroll);
    };
  }, []);

  return (
    <Header className={classNames('navbar', {
      navbar_hidden: down,
    })}>
      <Anchor bounds={200} targetOffset={84}>
        {links.map((link) => (
          <Link href={link.key} title={link.name} key={link.key} />
        ))}
      </Anchor>
    </Header>
  );
};

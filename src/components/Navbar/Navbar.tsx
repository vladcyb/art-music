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
  const timeout = useRef<any>(null);

  const handleScroll = () => {
    prevScrollY.current = window.scrollY;
  };
  console.log('render');

  const handlePageScroll = () => {
    if (timeout.current !== null) {
      return;
    }
    timeout.current = setTimeout(() => {
      setDown(window.scrollY > prevScrollY.current);
      handleScroll();
      timeout.current = null;
    }, 0);
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

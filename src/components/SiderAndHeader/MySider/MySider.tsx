import { Anchor, Layout } from 'antd';
import React, { useEffect } from 'react';
import './MySider.scss';


const { Sider } = Layout;
const { Link } = Anchor;

interface IMySiderProps {
  collapsed: boolean;
  toggle: () => void;
}

const links: Array<{ link: string, title: string }> = [
  {
    link: '#brands',
    title: 'Наши бренды',
  },
  {
    link: '#rent',
    title: 'Аренда и сборка',
  },
  {
    link: '#stage',
    title: 'Одежда сцены',
  },
  {
    link: '#repair',
    title: 'Ремонт',
  },
  {
    link: '#callback',
    title: 'Заказать звонок',
  },
  {
    link: '#payment',
    title: 'Оплата и доставка',
  },
  {
    link: '#contacts',
    title: 'Контакты',
  },
];

export const MySider = ({ collapsed, toggle }: IMySiderProps) => {
  useEffect(() => {
    if (collapsed) {
      document.body.classList.remove('no-scroll');
      return;
    }
    document.body.classList.add('no-scroll');
  }, [collapsed]);

  return (
    <>
      <div
        className="my-sider-outside"
        onClick={toggle}
        hidden={collapsed}
      />
      <Sider
        className="my-sider"
        collapsible
        collapsed={collapsed}
        onCollapse={toggle}
        reverseArrow
        collapsedWidth={0}
        style={{
          position: 'fixed',
          top: '64px',
          bottom: 0,
          right: 0,
          zIndex: 100,
          overflow: 'auto',
        }}
      >
        <Anchor
          bounds={200}
          targetOffset={84}
          affix={false}
          onClick={toggle}
        >
          {links.map((item) => (
            <Link
              href={item.link}
              title={item.title}
              key={item.link}
            />
          ))}
        </Anchor>
      </Sider>
    </>
  );
};

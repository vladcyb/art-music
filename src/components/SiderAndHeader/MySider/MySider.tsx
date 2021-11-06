import { Anchor, Layout } from 'antd';
import React from 'react';
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

export const MySider = ({ collapsed, toggle }: IMySiderProps) => (
  <Sider
    className="my-sider"
    style={{
      overflow: 'auto',
      position: 'fixed',
      right: 0,
      zIndex: 1,
      height: '100vh',
    }}
    collapsible
    collapsed={collapsed}
    onCollapse={toggle}
    reverseArrow
    collapsedWidth={0}
  >
    <Anchor
      bounds={200}
      targetOffset={84}
      affix={false}
      style={{ height: 'calc(100vh - var(--header-height))' }}
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
);

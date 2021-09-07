import { Layout, Menu } from 'antd';
import './navbar.scss';

const { Header } = Layout;


export const Navbar = () => (
  <Header className="navbar">
    <Menu
      theme="dark"
      mode="horizontal"
      selectable={false}
      onClick={(info) => {
        document.getElementById(info.key)?.scrollIntoView({
          behavior: 'smooth',
          block: 'end',
        });
      }}
    >
      <Menu.Item key="brands">Бренды</Menu.Item>
      <Menu.Item key="about">О нас</Menu.Item>
      <Menu.Item key="contacts">Контакты</Menu.Item>
    </Menu>
  </Header>
);

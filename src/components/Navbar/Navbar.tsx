import { Layout, Menu } from 'antd';
import { BsMusicNoteList } from 'react-icons/all';
import './navbar.scss';

const { Header } = Layout;

export const Navbar = () => (
  <Header className="navbar">
    <BsMusicNoteList className="navbar__logo" color="white" size="24" />
    <Menu theme="dark" mode="horizontal" selectable={false}>
      <Menu.Item key={1}>
        <a href="#brands">Бренды</a>
      </Menu.Item>
      <Menu.Item key={2}>О компании</Menu.Item>
      <Menu.Item key={3}>Контакты</Menu.Item>
    </Menu>
  </Header>
);

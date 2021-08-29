import {Layout, Menu} from 'antd';

const {Header} = Layout;

export const Navbar = () => (
  <Header>
    <Menu theme="dark" mode="horizontal">
      <Menu.Item key={1}>Бренды</Menu.Item>
      <Menu.Item key={2}>О компании</Menu.Item>
      <Menu.Item key={3}>Контакты</Menu.Item>
    </Menu>
  </Header>
);

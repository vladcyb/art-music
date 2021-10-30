import { Anchor, Layout } from 'antd';
import './navbar.scss';

const { Header } = Layout;
const { Link } = Anchor;


export const Navbar = () => (
  <Header className="navbar">
    <Anchor bounds={200} targetOffset={84}>
      <Link className="navbar__item" href="#brands" title="Бренды" />
      <Link className="navbar__item" href="#rent" title="Аренда" />
      <Link className="navbar__item" href="#stage" title="Одежда сцены" />
      <Link className="navbar__item" href="#repair" title="Ремонт" />
      <Link className="navbar__item navbar__contacts" href="#contacts" title="Контакты" />
    </Anchor>
  </Header>
);

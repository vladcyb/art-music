import { Anchor, Layout } from 'antd';
import { Logo } from '../Logo';
import './navbar.scss';

const { Header } = Layout;
const { Link } = Anchor;


export const Navbar = () => (
  <Header className="navbar">
    <div className="navbar__logo-wrapper">
      <a href="/">
        <Logo className="navbar__logo" />
      </a>
    </div>
    <Anchor bounds={200} targetOffset={84}>
      <Link className="navbar__item" href="#brands" title="Бренды" />
      <Link className="navbar__item" href="#rent" title="Аренда" />
      <Link className="navbar__item" href="#stage" title="Одежда сцены" />
      <Link className="navbar__item" href="#repair" title="Ремонт" />
      <Link className="navbar__item" href="#callback" title="Заказать звонок" />
      <Link className="navbar__item" href="#payment" title="Оплата и доставка" />
      <Link className="navbar__item navbar__contacts" href="#contacts" title="Контакты" />
    </Anchor>
  </Header>
);

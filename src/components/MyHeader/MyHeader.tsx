import { Anchor, Layout } from 'antd';
import { Logo } from '../Logo';
import './MyHeader.scss';

const { Header } = Layout;
const { Link } = Anchor;

console.log(process.env.NODE_ENV);

export const MyHeader = () => (
  <Header className="my-header">
    <div className="my-header__logo-wrapper">
      <a href="/">
        <Logo className="my-header__logo" />
      </a>
    </div>
    <Anchor bounds={200} targetOffset={84}>
      <Link className="my-header__item" href="#brands" title="Бренды" />
      <Link className="my-header__item" href="#rent" title="Аренда" />
      <Link className="my-header__item" href="#stage" title="Одежда сцены" />
      <Link className="my-header__item" href="#repair" title="Ремонт" />
      <Link className="my-header__item" href="#callback" title="Заказать звонок" />
      <Link className="my-header__item" href="#payment" title="Оплата и доставка" />
      <Link className="my-header__item my-header__contacts" href="#contacts" title="Контакты" />
    </Anchor>
  </Header>
);

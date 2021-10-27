import { Anchor, Layout } from 'antd';
import './navbar.scss';

const { Header } = Layout;
const { Link } = Anchor;


export const Navbar = () => (
  <Header className="navbar">
    <Anchor className="navbar__anchor" bounds={200} targetOffset={84}>
      <Link href="#brands" title="Бренды" />
      <Link href="#rent" title="Аренда" />
      <Link className="navbar__contacts" href="#contacts" title="Контакты" />
    </Anchor>
  </Header>
);

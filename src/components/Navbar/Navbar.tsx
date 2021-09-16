import { Anchor, Button, Layout } from 'antd';
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

interface INavbarProps {
  switchTheme: () => void;
}


export const Navbar = ({ switchTheme }: INavbarProps) => (
  <Header className="navbar">
    <Anchor bounds={200} targetOffset={84}>
      {links.map((link) => (
        <Link href={link.key} title={link.name} key={link.key} />
      ))}
    </Anchor>
    <Button className="navbar__theme-btn" type="default" onClick={switchTheme}>
      Switch theme
    </Button>
  </Header>
);

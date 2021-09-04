import React from 'react';
import { Layout, Spin } from 'antd';
import { About, Brands, CallBack, Contacts, Info } from './pages';
import { Navbar } from './components';
import { useFonts } from './shared/hooks/useFonts';
import { useMedia } from './shared/hooks/useMedia';
import './App.scss';

const { Footer, Content } = Layout;

export const App = () => {
  // Loading fonts: "Kaisei HarunoUmi", "Montserrat"
  const fontsLoaded = useFonts('https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500;700&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  useMedia();

  if (!fontsLoaded) {
    return (
      <Layout className="app app_loading">
        <section className="app__preloader">
          <Spin className="app__preloader-spin" size="large" />
        </section>
      </Layout>
    );
  }

  return (
    <Layout className="app">
      <Navbar />
      <Content>
        <Info />
        <Brands />
        <About />
        <CallBack />
        <Contacts />
      </Content>
      <Footer />
    </Layout>
  );
};

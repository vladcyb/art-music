import React from 'react';
import { Layout, Spin } from 'antd';
import { About, Brands, CallBack, Contacts, Info } from './pages';
import { Navbar } from './components';
import { useFonts } from './shared/hooks/useFonts';
import { useMedia } from './shared/hooks/useMedia';
import { Payment } from './pages/Payment';
import { Content } from 'antd/es/layout/layout';
import './App.scss';


export const App = () => {
  // Loading fonts: "Kaisei HarunoUmi", "Montserrat"
  const fontsLoaded = useFonts('https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500;700&family=Montserrat:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap');
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
        <Payment />
        <Contacts />
      </Content>
    </Layout>
  );
};

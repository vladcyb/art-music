import React from 'react';
import { Layout } from 'antd';
import { About, Brands, CallBack, Contacts, Info } from './pages';
import { Navbar } from './components';
import { Payment } from './pages/Payment';
import { Content } from 'antd/es/layout/layout';
import './App.scss';

export const App = () => (
  <Layout className="app">
    <Navbar />
    <Content className="app__content">
      <Info />
      <Brands />
      <About />
      <CallBack />
      <Payment />
      <Contacts />
    </Content>
  </Layout>
);

import React from 'react';
import { Layout } from 'antd';
import { Rent, Brands, CallBack, Contacts, Info, Payment, Repair, Stage } from './pages';
import { Navbar } from './components';
import { Content } from 'antd/es/layout/layout';
import './App.scss';

export const App = () => (
  <Layout className="app">
    <Navbar />
    <Content className="app__content">
      <Info />
      <Brands />
      <Rent />
      <Stage />
      <Repair />
      <CallBack />
      <Payment />
      <div className="app__perspective">
        <Contacts />
      </div>
    </Content>
  </Layout>
);

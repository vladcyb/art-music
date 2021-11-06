import React from 'react';
import { Layout } from 'antd';
import { Rent, Brands, CallBack, Contacts, Info, Payment, Repair, Stage } from './pages';
import { SiderAndHeader } from './components';
import './App.scss';

const { Content } = Layout;

export const App = () => (
  <Layout className="app">
    <SiderAndHeader />
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

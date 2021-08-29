import React from 'react';
import {Layout} from 'antd';
import {About, Brands, CallBack, Contacts, Info} from './pages';
import {Navbar} from './components';
import './App.scss';

const {Footer, Content} = Layout;


export const App = () => (
  <Layout className="app">
    <Navbar />
    <Content>
      <Info />
      <Brands />
      <About />
      <CallBack />
      <Contacts />
    </Content>
    <Footer>Footer</Footer>
  </Layout>
);

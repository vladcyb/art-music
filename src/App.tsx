import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { About, Brands, CallBack, Contacts, Info } from './pages';
import { Navbar } from './components';
import { Payment } from './pages/Payment';
import { Content } from 'antd/es/layout/layout';
import classNames from 'classnames';
import './App.scss';

const localTheme = parseInt(localStorage.getItem('theme') || '0');

export enum ThemeEnum {
  Light = 'theme-light',
  Dark = 'theme-dark',
}

export const themes: ThemeEnum[] = [ThemeEnum.Light, ThemeEnum.Dark];

export const App = () => {
  const [themeIndex, setThemeIndex] = useState<number>(localTheme);
  const switchTheme = () => {
    setThemeIndex((value) => {
      return value === themes.length - 1 ? 0 : value + 1;
    });
  };

  useEffect(() => {
    localStorage.setItem('theme', themeIndex.toString());
  }, [themeIndex]);

  return (
    <Layout className={classNames('app', themes[themeIndex])}>
      <Navbar switchTheme={switchTheme} />
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
};

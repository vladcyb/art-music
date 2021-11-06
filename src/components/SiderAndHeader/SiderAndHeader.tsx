import React, { useState } from 'react';
import { MyHeader } from './MyHeader';
import { MySider } from './MySider';

export const SiderAndHeader = () => {
  const [isSiderCollapsed, setIsSiderCollapsed] = useState(true);

  const toggle = () => {
    setIsSiderCollapsed((value) => !value);
  };

  return (
    <>
      <MyHeader onMenuClick={toggle} />
      <MySider toggle={toggle} collapsed={isSiderCollapsed} />
    </>
  );
};

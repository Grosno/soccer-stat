import { Spin } from 'antd';
import React from 'react';
import './PreLoader.scss';

const PreLoader = () => (
  <div className="preloader-form">
    <Spin
      tip="Идёт загрузка..."
      className="preloader-form__spinner"
    />
  </div>
);

export default PreLoader;

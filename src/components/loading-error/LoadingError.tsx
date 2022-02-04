import React from 'react';
import errorLoadingImage from '../../images/error-loading.png';

interface IProps {
  message: string;
}

const LoadingError = ({ message }: IProps) => (
  <div className="form-error">
    <span>{`Извините произошла ошибка, при попытке загрузить данные о ${message}. Перезагрузите страницу.`}</span>
    <img ref={errorLoadingImage} alt="Ошибка загрузки" />
  </div>
);

export default LoadingError;

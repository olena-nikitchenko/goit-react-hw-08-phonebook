import { useState, useEffect } from 'react';
import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return (
    <>
      {isLoading ? (
        <BallTriangle
          className={css.container}
          height={100}
          width={100}
          radius={5}
          color="rgb(102, 102, 241)"
          ariaLabel="ball-triangle-loading"
          wrapperClass={{}}
          wrapperStyle=""
          visible={true}
        />
      ) : null}
    </>
  );
};

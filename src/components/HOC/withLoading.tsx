import React, { useState, useEffect, ComponentType } from 'react';
import Loading from '../Loading';

const withLoading = <P extends object>(
  WrappedComponent: ComponentType<P>
): React.FC<P> => {
  const WithLoading: React.FC<P> = (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setLoading(false);
      }, 1000);

      return () => {
        clearTimeout(loadingTimeout);
      };
    }, []);

    if (loading) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };

  return WithLoading;
};

export default withLoading;

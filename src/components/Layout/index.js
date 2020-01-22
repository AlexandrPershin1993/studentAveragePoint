import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { useRedirect } from '../../utils/redirect';

const Layout = ({children, ...props}) => {
  useRedirect();
  const loadingMessage = useSelector(state => state.loading.arrayMessage)[0];
  return (
    <React.Fragment>
      {loadingMessage ? <Loading message={loadingMessage} /> : null}
      {children}
    </React.Fragment>
  )
}

export default Layout;
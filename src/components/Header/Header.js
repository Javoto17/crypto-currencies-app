import React from 'react';
import { Helmet } from 'react-helmet';

const Header = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Crypto Currencies</title>
    <link rel="icon" type="image/png" href="../../assets/images/logo.svg" sizes="16x16" />
  </Helmet>
);

export default Header;
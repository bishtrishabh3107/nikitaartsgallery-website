import React from 'react';
import Head from 'next/head';
import Header from '../element/Header/Header';
import Footer from '../element/Footer/Footer';

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Nikita Arts Gallery</title>
        <meta
          name="Buy handmade paintings online"
          content="best handmade paintings"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;

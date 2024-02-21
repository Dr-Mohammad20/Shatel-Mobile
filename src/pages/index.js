// General import
import React from 'react';
import Head from 'next/head';
//Styles
import styles from '@/styles/Home.module.css';
//Components
import Menu from '@/components/Menu';
import Banner from '@/components/Banner';
import WhyFiber from '@/components/WhyFiber';
import PageImage from '@/components/PageImage';
import Comment from '@/components/Comment';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Shatel Mobile</title>
        <meta name="description" content="Created by Mohammad Momeni" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.Container}>
        <Menu />
        <Banner />
        <WhyFiber />
        <PageImage />
        <Comment />
        <Footer />
      </main>
    </>
  );
}

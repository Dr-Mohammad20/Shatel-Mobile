// General import
import React, { useContext, useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
///context
import { stateContext } from '../../context/StateContextProvider';
//components
import UserMenu from '../../components/UserMenu';
import UpdateComment from '@/components/UpdateComment';
//Styles
import styles from '../../styles/UserPage.module.css';

const Profile = () => {
  // Context state
  const [userInfo, setUserinfo] = useState();
  const { state } = useContext(stateContext);
  const usersData = state.users;
  //Router
  const router = useRouter();
  // Login flag check section
  useEffect(() => {
    const loginFlag = localStorage.getItem('loginFlag');
    if (loginFlag == 'false') router.push('/');
    usersData.map((user) => {
      if (user.id == router.query.id) {
        setUserinfo(user);
      }
    });
  });
  return (
    <>
      <Head>
        <title>Shatel Mobile Profile</title>
        <meta name="description" content="Created by Mohammad Momeni" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.MainContainer} style={{ display: 'flex' }}>
        <UserMenu data={userInfo} />
        <UpdateComment data={userInfo} />
      </div>
    </>
  );
};

export default Profile;

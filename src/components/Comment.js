// General import
import React, { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
///context
import { stateContext } from '../context/StateContextProvider';
//Styles
import styles from '@/styles/Comment.module.css';

const Comment = () => {
  const { state } = useContext(stateContext);
  const data = state.users;

  return (
    <div className={styles.Container}>
      {data.map((user) => (
        <div className={styles.Item} key={user.id}>
          <div className={styles.AvatarContainer}>
            <Image
              src={user.Image}
              alt="banner"
              className={styles.AvatarImg}
              width={30}
              height={30}
            />
            <div>
              <p className={styles.Name}>
                {user.name} {user.family}
              </p>
              <p className={styles.Rate}>{user.revenue}</p>
            </div>
          </div>
          <p>{user.comment}</p>
          <Link className={styles.BtnViewProfile} href="#">
            View {user.name} Portfolio
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Comment;

// General import
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
//Styles
import styles from '@/styles/Menu.module.css';
//Images
import berger from '/assets/Hamburger Menu.svg';
import bergerClose from '/assets/Hamburger Menu Close.png';

function Menu() {
  // Flags state
  const [flag, setFlag] = useState();
  const [avatar, setAvatar] = useState('1');
  //Router
  const router = useRouter();
  // Berger menu open&close statet
  const [menu, setMenu] = useState(false);
  const menuHandler = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    setFlag(localStorage.getItem('loginFlag'));
    setAvatar(localStorage.getItem('id'));
  });
  const clickHandler = () => {
    router.push(`/profile/${avatar}`);
  };
  return (
    <div className={styles.Container}>
      <div className={styles.Menu}>
        <Link className={styles.logo} href="/">
          Fiber
        </Link>
        <div className={styles.menuLink}>
          <a href="#">Community</a>
          <a href="#">Pricing</a>
          <a href="#">Features</a>
        </div>
        <div className={styles.register}>
          {flag == 'false' ? (
            <>
              <Link className={styles.BtnSignIn} href="/Register/SignIn">
                Sign In
              </Link>
              <Link className={styles.BtnSignUp} href="/Register/SignUp">
                Sign Up
              </Link>
            </>
          ) : (
            <Image
              src={`/User Avatar${avatar}.svg`}
              alt="Avatar"
              className={styles.bergerImg}
              onClick={clickHandler}
              width={30}
              height={30}
            />
          )}
        </div>
      </div>
      {/* Berger Menu Section */}
      <div className={styles.bergerMenuContainer}>
        <Image
          src={!menu ? berger : bergerClose}
          alt="Menu"
          className={styles.bergerImg}
          onClick={menuHandler}
        />
        <div className={menu ? styles.bergerMenu : styles.bergerMenuInActive}>
          <ul>
            <li>
              <Link href="/">Fiber</Link>
            </li>
            <li>
              <Link href="/Register/SignUp">Sign Up</Link>
            </li>
            <li>
              <a href="#">Community</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Menu;

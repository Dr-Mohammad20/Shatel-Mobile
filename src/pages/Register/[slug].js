// General import
import { useRouter } from 'next/router';
import Head from 'next/head';
//Styles
import styles from '@/styles/Register.module.css';
//Components
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';

const Register = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Shatel Mobile Register</title>
        <meta name="description" content="Created by Mohammad Momeni" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <div className={styles.Container}>
        <Menu />
        {router.query.slug === 'SignIn' && <SignIn />}
        {router.query.slug === 'SignUp' && <SignUp />}
        <Footer />
      </div>
    </>
  );
};

export default Register;

// General import
import Image from 'next/image';
import { useRouter } from 'next/router';
//Styles
import styles from '@/styles/UserPage.module.css';

const UserMenu = ({ data }) => {
  const router = useRouter();
  // Btn Close clickHandler
  const ExitHandler = () => {
    localStorage.setItem('loginFlag', false);
    router.push('/');
  };
  return (
    <div className={styles.MenuContainer}>
      <div>
        <Image
          src={data?.Image}
          alt="Avatar"
          className={styles.AvatarImg}
          width={200}
          height={200}
        />
        <h4 className={styles.h4}>{data?.revenue}</h4>
      </div>
      <h1 className={styles.h1}>
        {data?.name} {data?.family}
      </h1>
      <button className={styles.BtnClose} onClick={ExitHandler}>
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;

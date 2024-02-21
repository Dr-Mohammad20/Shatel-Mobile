// General import
import Image from 'next/image';
import Link from 'next/link';
// Styles
import styles from '@/styles/PageImage.module.css';
// Images
import PageImg from '../../assets/Page Image.png';

const PageImage = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.textContainer}>
        <h1>Diversify your portfolio</h1>
        <p>
          Create an even more imperssive portfolio by creating case studies for
          your projects. Simply follow our step-by-step guide
        </p>
        <Link className={styles.BtnFreeTrial} href="#">
          Start Free Trial
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image src={PageImg} alt="banner" className={styles.PageImg} />
      </div>
    </div>
  );
};

export default PageImage;

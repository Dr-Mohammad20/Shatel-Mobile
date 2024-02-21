// General import
import Image from 'next/image';
import Link from 'next/link';
//Styles
import styles from '@/styles/Banner.module.css';
//Images
import BannerImg from '../../assets/hero-Illustration.png';
import Star from '../../assets/star.svg';
import CheckImg from '../../assets/Checkmark.svg';

const Banner = () => {
  return (
    <div className={styles.Container}>
      {/* Left side */}
      <div className={styles.leftBannerContainer}>
        <div className={styles.RateContainer}>
          <div className={styles.starContainer}>
            <Image src={Star} alt="banner" className={styles.StarImg} />
            <Image src={Star} alt="banner" className={styles.StarImg} />
            <Image src={Star} alt="banner" className={styles.StarImg} />
            <Image src={Star} alt="banner" className={styles.StarImg} />
            <Image src={Star} alt="banner" className={styles.StarImg} />
          </div>
          <p className={styles.RateText}>Rated 4.8/5 (243 reviews)</p>
        </div>
        <div>
          <h1>Create your portfolio in minutes</h1>
        </div>
        <div>
          <p className={styles.CheckText}>
            With fiber, you can setup your own personal portfolio in minutes
            with dozens of premade, beautiful templates.
          </p>
        </div>
        <div className={styles.BtnContainer}>
          <Link className={styles.BtnFreeTrial} href="#">
            Start Free Trial
          </Link>
          <Link className={styles.BtnExamples} href="#">
            view examples
          </Link>
        </div>
        <div className={styles.showRateContainer} style={{ gap: '10px' }}>
          <div>
            <Image src={CheckImg} alt="banner" className={styles.CheckImg} />
            <p className={styles.CheckText}>Rated 4.8/5 (243 reviews)</p>
          </div>
          <div>
            <Image src={CheckImg} alt="banner" className={styles.CheckImg} />
            <p className={styles.CheckText}>Rated 4.8/5 (243 reviews)</p>
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className={styles.rightBannerContainer}>
        <Image src={BannerImg} alt="banner" className={styles.BannerImg} />
      </div>
    </div>
  );
};

export default Banner;

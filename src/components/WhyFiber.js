// General import
import Image from 'next/image';
//Styles
import styles from '@/styles/WhyFiber.module.css';
//Images
import TimeImg from '../../assets/time.svg';
import CodeImg from '../../assets/code.svg';
import ResponsiveImg from '../../assets/allSizes.svg';

const WhyFiber = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.WhyFiber}>Why Fiber?</div>
      <h1>A good portfolio means good employability.</h1>
      <div className={styles.itemContainer}>
        <div className={styles.item}>
          <div>
            <Image src={TimeImg} alt="banner" className={styles.IconImg} />
            <p>Build in Minutes</p>
          </div>
          <p className={styles.Description}>
            With a selection of premade templates, you can build out a portfolio
            in less than 10 minutes
          </p>
        </div>
        <div className={styles.item}>
          <div>
            <Image src={CodeImg} alt="banner" className={styles.IconImg} />
            <p>Add custom CSS</p>
          </div>
          <p className={styles.Description}>
            Customize your personal portfolio even more with the ability to add
            your own custom CSS styles
          </p>
        </div>
        <div className={styles.item}>
          <div>
            <Image
              src={ResponsiveImg}
              alt="banner"
              className={styles.IconImg}
            />
            <p>Responsive</p>
          </div>
          <p className={styles.Description}>
            All Fiber templates are fully responsive to ensure the experience is
            seemless across all devices
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyFiber;

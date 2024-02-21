// General import
import Link from 'next/link';
// Styles
import styles from '@/styles/Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.Container}>
      <div>
        <h3>Fiber</h3>
        <p>
          With fiber, you can setup your own personal portfolio in minutes with
          dozens of premade, beautiful templates.
        </p>
        <p>Made with &hearts; in the Netherlands.</p>
      </div>
      <div>
        <h3>Sitemap</h3>
        <Link className={styles.FooterLink} href="/">
          Homepage
        </Link>
        <Link className={styles.FooterLink} href="#">
          Pricing
        </Link>
        <Link className={styles.FooterLink} href="#">
          Testimonials
        </Link>
        <Link className={styles.FooterLink} href="#">
          Features
        </Link>
      </div>
      <div>
        <h3>Resources</h3>
        <Link className={styles.FooterLink} href="#">
          Support
        </Link>
        <Link className={styles.FooterLink} href="#">
          Contact
        </Link>
        <Link className={styles.FooterLink} href="#">
          FAQ
        </Link>
      </div>
      <div>
        <h3>Company</h3>
        <Link className={styles.FooterLink} href="#">
          About
        </Link>
        <Link className={styles.FooterLink} href="#">
          Customers
        </Link>
        <Link className={styles.FooterLink} href="#">
          Blog
        </Link>
      </div>
      <div>
        <h3>Portfolios</h3>
        <Link className={styles.FooterLink} href="#">
          Name
        </Link>
        <Link className={styles.FooterLink} href="#">
          Name
        </Link>
        <Link className={styles.FooterLink} href="#">
          Name
        </Link>
      </div>
    </div>
  );
};

export default Footer;

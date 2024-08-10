import React from 'react';
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
    <div>
      <div className={styles.mainContainer}>
        <section className={`${styles.sectionContainer} ${styles.hero}`}>
          <div className={styles.content}>
            <p>CRUISER SKATEBOARD</p><h1>MMM AННН <br/> PUSH IT!</h1>
            <p>Interdum et malesuada fames ac ante ipsum primis faucibus. Integer id nisi nec nulla luctus lacinia non en turpis.</p>
            <a href="#ticketBookingSection" className={styles.button}>Discover More</a>
          </div>
          <div className={styles.image}>
            <img src="./penny-skateboard.png" alt="Skateboard" />
          </div>
        </section>

        <section className={`${styles.sectionContainer} ${styles.product}`}>
          <div className={styles.content}>
            <p>ADIDAS PHARRELL WILLIAMS TENNIS HU</p><h1>BECAUSE <br/> I'M HAPPY <br/> AGAIN</h1>
            <p>Vestibulum aliquam hendrerit moleste. Mauris malesuada nisi sit amet augue accumsan tincidunt.</p>
            <a href="#ticketBookingSection" className={styles.button}>Discover More</a>
          </div>
          <div className={styles.image}>
            <img src="./adidas-shoes.png" alt="Shoes" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
